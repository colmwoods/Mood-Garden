import { DAYS, FLOWERS } from "../scripts/constants.js";
import { moodStorage, storage } from "../storage.js";


export function renderGardenPage() {

    const items = moodStorage.getHistory();

    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        last7Days.push({
            dateString: storage.formatDate(d), dayName: DAYS[d.getDay()], isToday: i === 0
        });
    }

    const gardenHTML = last7Days.map(day => {
        const entry = items.find(el => el.date === day.dateString);
        console.log(entry);
        const flower = entry ? FLOWERS[entry.mood] : '🌱';
        const opacity = entry ? "opacity-100" : "opacity-30";
        const border = entry ? "ring-2 ring-emerald-400" : "";
        return `<div class="flower flex flex-col items-center gap-1 rounded-2xl bg-white/10 p-3 text-center hover:bg-white/20 ${border} ${opacity}">
                <span class="text-3xl">${flower}</span>
                <span class="text-xs text-white/50">${day.dayName}</span>
            </div>
        `;
    }).join('');

    const loggedThisWeek = last7Days.filter(day => items.some(l => l.date === day.dateString)).length;

    const container = document.getElementById('page-garden');
    if (!container) return;

    container.innerHTML = `
    <div>
                            <h2 class="text-xl font-semibold">Your Garden 🌿</h2>
                            <p class="text-sm text-white/60 mt-1">Every flower is a day you tracked your mood
                            </p>
                        </div>
                        <div class="grid grid-cols-4 gap-3 sm:grid-cols-7">
                            ${gardenHTML}
                        </div>
                        <div class="rounded-2xl bg-white/5 border border-white/10 p-4 text-sm text-white/70">
                            🌿 <span class="text-white font-medium">${loggedThisWeek}</span> logged this week.
                             ${loggedThisWeek >= 5 ? "Your garden is blooming! ✨" : "Keep planting flowers every day. 🌱"}
                        </div>
  `;
}