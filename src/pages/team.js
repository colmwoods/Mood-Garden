export function showTeamModal() {
    let modal = document.getElementById('teamModal');

    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'teamModal';
        modal.classList.add('team-modal-overlay');

        modal.innerHTML = `
            <div class="team-modal-content">
                <button class="team-close-btn">&times;</button>
                <h2 class="team-title">🌿 Meet the Mood-Garden Team</h2>

                <div class="team-grid">

                    <div class="team-card">
                        <img src="/images/colm.jpg" alt="Colm Woods">
                        <h3>Colm Woods</h3>
                        <div class="team-links">
                            <a href="https://github.com/colmwoods" target="_blank" rel="noopener noreferrer" aria-label="Colm GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://linkedin.com/in/colm-woods" target="_blank" rel="noopener noreferrer" aria-label="Colm LinkedIn">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    <div class="team-card">
                        <img src="/images/aisha.jpg" alt="Aisha">
                        <h3>Aisha</h3>
                        <div class="team-links">
                            <a href="https://github.com/Aishieee" target="_blank" rel="noopener noreferrer" aria-label="Aisha GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/aishasheikh2k1/" target="_blank" rel="noopener noreferrer" aria-label="Aisha LinkedIn">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    <div class="team-card">
                        <img src="/images/akashebaev-ux.jpg" alt="Azamat">
                        <h3>akashebaev-ux</h3>
                        <div class="team-links">
                            <a href="https://github.com/akashebaev-ux" target="_blank" rel="noopener noreferrer" aria-label="Azamat GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/azamat-kashebayev/" target="_blank" rel="noopener noreferrer" aria-label="Azamat LinkedIn">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    <div class="team-card">
                        <img src="/images/barkode.jpg" alt="barkode">
                        <h3>barkode</h3>
                        <div class="team-links">
                            <a href="https://github.com/barkode" target="_blank" rel="noopener noreferrer" aria-label="barkode GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/kostiantyn-krysenko/" target="_blank" rel="noopener noreferrer" aria-label="barkode LinkedIn">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    <div class="team-card">
                        <img src="/images/11florin.jpg" alt="Florin">
                        <h3>11florin</h3>
                        <div class="team-links">
                            <a href="https://github.com/11florin" target="_blank" rel="noopener noreferrer" aria-label="Florin GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/florin-albu-0750b6238/" target="_blank" rel="noopener noreferrer" aria-label="Florin LinkedIn">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

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