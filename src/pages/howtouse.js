export function showHowToUseModal() {
    let modal = document.getElementById('howToUseModal');

    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'howToUseModal';
        modal.classList.add('team-modal-overlay'); // reuse same overlay

        modal.innerHTML = `
            <div class="team-modal-content">
                <button class="team-close-btn">&times;</button>
                <h2 class="team-title">🌱 How To Use Mood-Garden</h2>

                <div class="howto-content">
                    <ul>
                        <li>Select one mood per day</li>
                        <li>Add an optional note</li>
                        <li>Submit to plant your mood</li>
                        <li>View your Garden grow over time</li>
                        <li>Check Analytics for mood trends</li>
                    </ul>

                    <p class="howto-note">
                        Only one mood can be logged per day 🌿
                    </p>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('.team-close-btn').addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
}