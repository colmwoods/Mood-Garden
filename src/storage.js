/**
 * Mood Garden Storage Library (Vanilla JS)
 * Key in localStorage: mood-garden-app
 */

const STORAGE_KEY = 'mood-garden-app';
const CURRENT_VERSION = 1;

/**
 * Creates the initial state of the application
 */
const createInitialState = () => {
    const now = new Date().toISOString();
    return {
        meta: {
            version: CURRENT_VERSION, createdAt: now, updatedAt: now,
        }, userSettings: {
            theme: 'system', language: 'uk', userName: 'User', notifications: true
        }, history: [] // Array of objects { date: 'YYYY-MM-DD', mood: string, note: string, timestamp: string }
    };
};

/**
 * Migration system.
 * Add new cases (version < 2, etc.) when you change the data structure.
 */
const migrate = (oldState) => {
    if (!oldState || !oldState.meta) return createInitialState();

    let state = {...oldState};
    const version = state.meta.version || 0;

    // Migration example (uncomment and modify when needed):
    if (version < 2) {
        state.userSettings.newField = 'default';
        state.meta.version = 2;
    }

    state.meta.version = CURRENT_VERSION;
    state.meta.updatedAt = new Date().toISOString();
    return state;
};

/**
 * Internal utilities for working with the browser
 */
const io = {
    save: (data) => {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.error('Storage Error: Не вдалося зберегти дані (можливо, вичерпано ліміт)', e);
        }
    }, load: () => {
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            console.error('Storage Error: Помилка читання JSON', e);
            return null;
        }
    }
};

const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/**
 * Public API
 */
export const moodStorage = {
    // Cache data in memory for fast access
    _state: null,

    /**
     * Init (call at SPA load). Loads data from localStorage, applies migrations, and prepares the state.
     */
    init() {
        const raw = io.load();
        this._state = migrate(raw);
        io.save(this._state);
        return this._state;
    },

    /**
     * Get the entire state object (read-only)
     */

    getState() {
        return JSON.parse(JSON.stringify(this._state));
    },

    // --- User settings ---

    getSettings() {
        return {...this._state.userSettings};
    },

    updateSettings(patch) {
        this._state.userSettings = {...this._state.userSettings, ...patch};
        this._persist();
        return this.getSettings();
    },

    // --- Working with mood and history ---

    /**
     * Save the entry for today (or any date)
     * @param {Object} entry - { mood: string, note: string, date?: string }
     */
    saveEntry({mood, note, date = null}) {
        const targetDate = date || new Date().toISOString().split('T')[0];
        const timestamp = new Date().toISOString();

        const newEntry = {
            date: targetDate, mood, note, updatedAt: timestamp
        };

        // We update the history: if the date already exists - replace it, if not - add it
        const index = this._state.history.findIndex(item => item.date === targetDate);

        if (index !== -1) {
            this._state.history[index] = {...this._state.history[index], ...newEntry};
        } else {
            this._state.history.push(newEntry);
            // Sort history by date (newest to oldest)
        }

        this._state.history.sort((a, b) => b.date.localeCompare(a.date));

        this._persist();
        return newEntry;
    },

    /**
     * Get a record for a specific date
     */
    getEntryByDate(date) {
        return this._state.history.find(item => item.date === date) || null;
    },

    /**
     * Get the full history
     */
    getHistory() {
        return [ ...this._state.history ];
    },

    /**
     * Delete entry by date
     */
    deleteEntry(date) {
        this._state.history = this._state.history.filter(item => item.date !== date);
        this._persist();
    },

    // --- Auxiliary methods ---

    _persist() {
        this._state.meta.updatedAt = new Date().toISOString();
        io.save(this._state);
    },

    clearAll() {
        if (confirm('Are you sure you want to delete all Mood Garden data?')) {
            this._state = createInitialState();
            io.save(this._state);
            window.location.reload();
        }
    }
};

export const storage = {
    init:              () => moodStorage.init(),
    getSettings:       () => moodStorage.getSettings(),
    updateSettings: (patch) => moodStorage.updateSettings(patch),
    saveEntry:       (entry) => moodStorage.saveEntry(entry),
    getEntryByDate:   (date) => moodStorage.getEntryByDate(date),
    getHistory:        () => moodStorage.getHistory(),
    deleteEntry:       (date) => moodStorage.deleteEntry(date),
    clearAll:          () => moodStorage.clearAll(),
    formatDate:        (date) => formatDate(date),
};