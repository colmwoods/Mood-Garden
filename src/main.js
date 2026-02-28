import './styles/main.css';

import { renderAnalytics } from './pages/analytics.js';
import { renderGarden } from './pages/garden.js';

import { renderTeam } from "./pages/team.js"

const routes = {
    '/garden': renderGarden,
    '/analytics': renderAnalytics,
    '/team': renderTeam
}

function router() {
  const path = location.hash.replace('#', '');

  if (!path) return; // Stay on index.html main layout

  const page = routes[path];

  if (!page) return;

  const app = document.getElementById('app');
  app.innerHTML = '';
  page();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

window.addEventListener('DOMContentLoaded', () => {
  const teamBtn = document.getElementById('teamBtn');
  const howToUseBtn = document.getElementById('howToUseBtn');

  if (teamBtn) teamBtn.onclick = showTeamModal;
  if (howToUseBtn) howToUseBtn.onclick = showHowToUseModal;
});
