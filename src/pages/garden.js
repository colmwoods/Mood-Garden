import { DAYS, FLOWERS } from "../scripts/constants.js";
import { moodStorage, storage } from "../storage.js";


export function getGardenHTML(limitDays = 7) {
    const items = moodStorage.getHistory();
    const lastDays = [];

    for (let i = limitDays - 1; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        lastDays.push({
            fullDate: storage.formatDate(d),
            shortName: DAYS[d.getDay()],
            isToday: i === 0
        });
    }

    return lastDays.map(day => {
        const entry = items.find(l => storage.formatDate(l.date) === day.fullDate);
        const flower = entry ? FLOWERS[entry.mood] : "🌱";
        const opacity = entry ? "opacity-100" : "opacity-30";
        const ring = day.isToday ? "ring-2 ring-emerald-400" : "";

        return `
            <div class="flex flex-col items-center gap-1 rounded-2xl bg-white/10 p-3 text-center ${ring} ${opacity}">
                <span class="text-2xl sm:text-3xl">${flower}</span>
                <span class="text-[10px] text-white/50 uppercase">${day.shortName}</span>
            </div>
        `;
    }).join('');
}


export function getGardenSummaryHTML() {
    const items = moodStorage.getHistory();

    // Рахуємо записи за останні 7 днів
    const last7Days = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        last7Days.push(storage.formatDate(d));
    }

    const loggedThisWeek = last7Days.filter(dateStr =>
        items.some(l => storage.formatDate(l.date) === dateStr)
    ).length;

    const message = loggedThisWeek >= 5
        ? "Your garden is blooming! ✨"
        : "Keep planting flowers every day. 🌱";

    return `
        <div class="rounded-2xl bg-white/5 border border-white/10 p-4 text-sm text-white/70 mt-4">
            🌿 <span class="text-white font-medium">${loggedThisWeek} days</span> logged this week.
            ${message}
        </div>
    `;
}

export function renderGardenPage() {


    const container = document.getElementById('page-garden');
    if (!container) return;

    container.innerHTML = `
                        <div>
                        <h2 class="text-xl font-semibold">Your Garden 🌿</h2>
                        <p class="text-sm text-white/60 mt-1">Every flower is a day you tracked your mood</p>
                        </div>
                        <div class="grid grid-cols-4 gap-3 sm:grid-cols-7">
                            ${getGardenHTML(7)}
                        </div>
                        <div class="rounded-2xl bg-white/5 border border-white/10 p-4 text-sm text-white/70">
                            ${getGardenSummaryHTML()}
                        </div>
  `;
}