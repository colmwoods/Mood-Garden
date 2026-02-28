export function showHowToUseModal() {
    let modal = document.getElementById('howToUseModal');

    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'howToUseModal';
        modal.classList.add('modal');

        modal.innerHTML = `
            <div class="modal-content">
                <button class="close-modal">&times;</button>
                <h2>🌱 How To Use Mood-Garden</h2>

                <ul>
                    <li>Select one mood per day</li>
                    <li>Add an optional note</li>
                    <li>Submit to plant your mood</li>
                    <li>View your Garden grow over time</li>
                    <li>Check Analytics for mood trends</li>
                </ul>

                <p>Only one mood can be logged per day 🌿</p>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    modal.style.display = 'flex';
}