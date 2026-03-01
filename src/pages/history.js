import { FLOWERS } from "../scripts/constants.js";
import { moodStorage } from '../storage.js';


export function renderHistoryPage() {

    const logs = moodStorage.getHistory();
    const items = logs.map(e => `
        <div class="flex items-center gap-4 rounded-2xl bg-white/10 px-4 py-3 hover:bg-white/15 transition">
            <span class="text-3xl">${FLOWERS[e.mood] || '🌱'}</span>
            <div class="flex-1">
                <p class="text-sm font-medium">${e.mood.charAt(0).toUpperCase() + e.mood.slice(1)}</p>
                <p class="text-xs text-white/50">${e.date} · "${e.note}"</p>
            </div>
        </div>
    `).join('') || '<p class="text-white/40 text-sm">There are no entries yet.</p>';

    const container = document.getElementById("page-history");
    if (!container) return;

    container.innerHTML = `
        <div>
            <h2 class="text-xl font-semibold">History 🕰️</h2>
            <p class="text-sm text-white/60 mt-1">All your past mood entries</p>
        </div>
        <div class="flex flex-col gap-3">${items}</div>
    `;
}