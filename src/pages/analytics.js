import { COLORS, FLOWERS } from "../scripts/constants.js";
import { moodStorage } from "../storage.js";


export function renderAnalytics() {

    const items = moodStorage.getHistory();
    const total = items.length;

    const counts = Object.fromEntries(Object.keys(FLOWERS).map(m => [ m, 0 ]));
    items.forEach(e => {
        if (counts[e.mood] !== undefined) counts[e.mood]++;
    });

    const happyPct = total ? Math.round((counts.happy / total) * 100) : 0;

    const container = document.getElementById("page-analytics");
    if (!container) return;
    container.innerHTML = `
    <div>
                            <h2 class="text-xl font-semibold">Analytics 📊</h2>
                            <p class="text-sm text-white/60 mt-1">Your mood patterns over time</p>
                        </div>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div class="rounded-2xl bg-white/10 p-4 text-center">
                                <div class="text-3xl mb-1">🌻</div>
                                <div class="text-2xl font-bold">${happyPct}%</div>
                                <div class="text-xs text-white/60 mt-1">Happy days</div>
                            </div>
                            <div class="rounded-2xl bg-white/10 p-4 text-center">
                                <div class="text-3xl mb-1">🔥</div>
                                <div class="text-2xl font-bold">12</div>
                                <div class="text-xs text-white/60 mt-1">Day streak</div>
                            </div>
                            <div class="rounded-2xl bg-white/10 p-4 text-center">
                                <div class="text-3xl mb-1">📅</div>
                                <div class="text-2xl font-bold">${total}</div>
                                <div class="text-xs text-white/60 mt-1">Total entries</div>
                            </div>
                        </div>
                        <div class="rounded-2xl bg-white/5 border border-white/10 p-4">
                            <p class="text-sm font-medium mb-3">Mood distribution</p>
                            <div class="flex flex-col gap-2 text-sm">
                                ${Object.entries(counts).map(([ mood, count ]) => {
        const pct = total ? Math.round((count / total) * 100) : 0;
        return `
                    <div class="flex items-center gap-3">
                        <span class="w-6">${FLOWERS[mood]}</span>
                        <div class="flex-1 bg-white/10 rounded-full h-2">
                            <div class="${COLORS[mood]} h-2 rounded-full" style="width:${pct}%"></div>
                        </div>
                        <span class="text-white/60 w-8 text-right">${pct}%</span>
                    </div>`;
    }).join('')}
                            </div>
                        </div>
                    
  `
}