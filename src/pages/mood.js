import { FLOWERS, KEYWORDS } from "../scripts/constants.js";
import { moodStorage } from "../storage.js";
import {navigateTo} from "../main.js";


function detectMood(text) {
    const t = text.toLowerCase();
    return Object.keys(KEYWORDS).find(mood => KEYWORDS[mood].some(w => t.includes(w))) || null;
}



export function renderMoodPage() {
    const container = document.getElementById('page-log')
    if (!container) return;
    container.innerHTML = `
    
                        <div>
                            <h2 class="text-xl font-semibold">Log Mood 🌸</h2>
                            <p class="text-sm text-white/60 mt-1">
                                Choose a flower that matches your mood
                            </p>
                        </div>


                        <div class="grid grid-cols-2 gap-3 sm:grid-cols-5">
                        
                        ${Object.entries(FLOWERS).map(([ mood, flower ]) => `
                <button data-mood="${mood}" class="moodBtn flower flex flex-col items-center gap-2 rounded-2xl bg-white/10 p-4 hover:bg-white/20 hover:ring-2 hover:ring-white/30">
                    <span class="text-4xl">${flower}</span>
                    <span class="text-xs font-medium">${mood.charAt(0).toUpperCase() + mood.slice(1)}</span>
                </button>
            `).join('')}
                        </div>


                        <!-- TEXTAREA (Azamat)  -->
                        <textarea id="moodInput" rows="3" placeholder="What's on your mind today?" class="rounded-xl bg-black/20 border border-white/10 px-4 py-3
text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 
focus:ring-white/20 resize-none"></textarea>

                        <button id="submitMoodBtn"
                                class="rounded-xl bg-emerald-500 hover:bg-emerald-600 px-6 py-3
                            font-medium transition mt-2">
                            Submit Mood 🌱
                        </button>


                        <!-- ✅ ERROR MESSAGE -->

                        <p id="logError" class="text-red-300 text-sm"></p>


                        <!-- ✅ CONFIRMATION CARD -->

                        <div id="confirmationCard"
                             class="hidden rounded-2xl bg-white/10 border border-white/20 p-5 mt-4">

                            <h3 class="text-lg font-semibold mb-2">
                                Mood Saved 🌱
                            </h3>

                            <p id="confirmMood"></p>
                            <p id="confirmDate"></p>

                            <button id="backHomeBtn"
                                    class="mt-4 rounded-xl bg-white/20 px-4 py-2 hover:bg-white/30">
                                Return Home
                            </button>

                        </div>`;
    let selectedMood = null;

    document.querySelectorAll('.moodBtn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedMood = btn.dataset.mood;
            document.querySelectorAll('.moodBtn').forEach(b => b.classList.remove('ring-4','ring-emerald-400'));
            btn.classList.add('ring-4', 'ring-emerald-400');
        });
    });

    document.getElementById('moodInput').addEventListener('input', e => {
        const detected = detectMood(e.target.value);
        if (detected) {
            selectedMood = detected;
            document.querySelectorAll('.moodBtn').forEach(b => b.classList.remove('ring-4','ring-emerald-400'));
            document.querySelector(`.moodBtn[data-mood="${detected}"]`)?.classList.add('ring-4','ring-emerald-400');
        }
    });

    document.getElementById('submitMoodBtn').addEventListener('click', () => {
        const note = document.getElementById('moodInput').value.trim();
        const mood = selectedMood || detectMood(note);
        const err  = document.getElementById('logError');

        if (!mood) { err.textContent = 'Choose a mood or write about it.'; return; }

        const ok = moodStorage.saveEntry({mood, note});
        if (!ok) { err.textContent = 'You\'ve already kept your spirits up today.'; return; }

        err.textContent = '';
        document.getElementById('confirmMood').textContent = 'Mood: ' + mood;
        document.getElementById('confirmDate').textContent = 'Date: ' + new Date().toDateString();
        document.getElementById('confirmationCard').classList.remove('hidden');
    });

    document.getElementById('backHomeBtn').addEventListener('click', () => navigateTo('home'));



}