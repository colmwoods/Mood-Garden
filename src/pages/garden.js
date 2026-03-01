export function renderGardenPage() {

    const container = document.getElementById('page-garden');
    if (!container) return;

    container.innerHTML = `
    <div>
                            <h2 class="text-xl font-semibold">Your Garden 🌿</h2>
                            <p class="text-sm text-white/60 mt-1">Every flower is a day you tracked your mood
                            </p>
                        </div>
                        <div class="grid grid-cols-4 gap-3 sm:grid-cols-7">
                            <div
                                    class="flower flex flex-col items-center gap-1 rounded-2xl bg-white/10 p-3 text-center hover:bg-white/20">
                                <span class="text-3xl">🌻</span><span class="text-xs text-white/50">Mon</span>
                            </div>
                            <div
                                    class="flower flex flex-col items-center gap-1 rounded-2xl bg-white/10 p-3 text-center hover:bg-white/20">
                                <span class="text-3xl">🌸</span><span class="text-xs text-white/50">Tue</span>
                            </div>
                            <div
                                    class="flower flex flex-col items-center gap-1 rounded-2xl bg-white/10 p-3 text-center hover:bg-white/20">
                                <span class="text-3xl">🌼</span><span class="text-xs text-white/50">Wed</span>
                            </div>
                            <div
                                    class="flower flex flex-col items-center gap-1 rounded-2xl bg-white/10 p-3 text-center hover:bg-white/20">
                                <span class="text-3xl">🌷</span><span class="text-xs text-white/50">Thu</span>
                            </div>
                            <div
                                    class="flower flex flex-col items-center gap-1 rounded-2xl bg-white/10 p-3 text-center hover:bg-white/20">
                                <span class="text-3xl">🥀</span><span class="text-xs text-white/50">Fri</span>
                            </div>
                            <div
                                    class="flower flex flex-col items-center gap-1 rounded-2xl bg-white/10 p-3 text-center hover:bg-white/20">
                                <span class="text-3xl">🌺</span><span class="text-xs text-white/50">Sat</span>
                            </div>
                            <div
                                    class="flower flex flex-col items-center gap-1 rounded-2xl bg-white/5 p-3 text-center opacity-40">
                                <span class="text-3xl">🌱</span><span class="text-xs text-white/50">Sun</span>
                            </div>
                        </div>
                        <div class="rounded-2xl bg-white/5 border border-white/10 p-4 text-sm text-white/70">
                            🌿 <span class="text-white font-medium">6 days</span> logged this week · Most common
                            mood: <span class="text-yellow-300">🌻 Happy</span>
                        </div>
  `
}