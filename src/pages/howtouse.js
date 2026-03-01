// /src/pages/howtouse.js

export function renderHowToUsePage() {
    const container = document.getElementById("page-howto");
    if (!container) return;

    container.innerHTML = `
        <div class="flex flex-col gap-6">
            
            <div>
                <h2 class="text-xl font-semibold">🌱 How To Use Mood Garden</h2>
                <p class="text-sm text-white/60 mt-1">
                    Quick guide to using the app
                </p>
            </div>

            <div class="rounded-2xl bg-white/10 p-6 space-y-4 text-sm text-white/80">
                <div class="flex items-start gap-3">
                    <span class="text-lg">🌿</span>
                    <p>Select one mood per day that matches how you feel.</p>
                </div>

                <div class="flex items-start gap-3">
                    <span class="text-lg">📝</span>
                    <p>Add an optional note to describe your thoughts.</p>
                </div>

                <div class="flex items-start gap-3">
                    <span class="text-lg">🌸</span>
                    <p>Submit your mood to plant it in your Garden.</p>
                </div>

                <div class="flex items-start gap-3">
                    <span class="text-lg">🌼</span>
                    <p>Visit your Garden to see your mood history grow.</p>
                </div>

                <div class="flex items-start gap-3">
                    <span class="text-lg">📊</span>
                    <p>Check Analytics to understand your emotional trends.</p>
                </div>

                <div class="pt-3 border-t border-white/10 text-emerald-300">
                    🌱 Only one mood can be logged per day.
                </div>
            </div>

        </div>
    `;
}