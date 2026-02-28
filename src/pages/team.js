export function showTeamModal() {
    let modal = document.getElementById('teamModal');

    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'teamModal';
        modal.classList.add('modal');

        modal.innerHTML = `
            <div class="modal-content">
                <button class="close-modal">&times;</button>
                <h2>🌿 Meet the Mood-Garden Team</h2>

                <div class="team-member">
                    <img src="/images/colm.jpg" alt="Colm Woods" class="team-img">
                    <h3>Colm Woods</h3>
                    <div class="social-links">
                        <a href="https://github.com/colmwoods" target="_blank">GitHub</a>
                        <a href="https://linkedin.com/in/colm-woods" target="_blank">LinkedIn</a>
                    </div>
                </div>

                <div class="team-member">
                    <img src="/images/aisha.jpg" alt="Aisha" class="team-img">
                    <h3>Aisha</h3>
                    <div class="social-links">
                        <a href="https://github.com/Aishieee" target="_blank">GitHub</a>
                        <a href="https://www.linkedin.com/in/aishasheikh2k1/" target="_blank">LinkedIn</a>
                    </div>
                </div>

                <div class="team-member">
                    <img src="/images/akashebaev-ux.jpg" alt="Azamat" class="team-img">
                    <h3>akashebaev-ux</h3>
                    <div class="social-links">
                        <a href="https://github.com/akashebaev-ux" target="_blank">GitHub</a>
                        <a href="https://www.linkedin.com/in/azamat-kashebayev/" target="_blank">LinkedIn</a>
                    </div>
                </div>

                <div class="team-member">
                    <img src="/images/barkode.jpg" alt="barkode" class="team-img">
                    <h3>barkode</h3>
                    <div class="social-links">
                        <a href="https://github.com/barkode" target="_blank">GitHub</a>
                        <a href="#" target="_blank">LinkedIn</a>
                    </div>
                </div>

                <div class="team-member">
                    <img src="/images/florin.jpg" alt="Florin" class="team-img">
                    <h3>11florin</h3>
                    <div class="social-links">
                        <a href="https://github.com/11florin" target="_blank">GitHub</a>
                        <a href="https://www.linkedin.com/in/florin-albu-0750b6238/" target="_blank">LinkedIn</a>
                    </div>
                </div>

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