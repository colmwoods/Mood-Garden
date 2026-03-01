// dateUtils.js

/**
 * Returns a date string in the format YYYY-MM-DD for local time
 */
export const getTodayISO = () => {
    const date = new Date();
    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - (offset * 60 * 1000));
    return localDate.toISOString().split('T')[0];
};

/**
 * Formats an ISO date into a human-readable format (e.g. "February 28")
 */
export const formatFriendlyDate = (isoString, locale = 'uk-UA') => {
    const date = new Date(isoString);
    return date.toLocaleDateString(locale, { day: 'numeric', month: 'long' });
};

/**
 * Groups history by months (useful for garden visualization)
 */
export const groupHistoryByMonth = (history) => {
    return history.reduce((groups, entry) => {
        const month = entry.date.substring(0, 7); // "YYYY-MM"
        if (!groups[month]) groups[month] = [];
        groups[month].push(entry);
        return groups;
    }, {});
};