import { moodStorage } from '/src/storage.js'
import './styles/main.css';

import { renderAnalytics } from './pages/analytics.js';
import { renderGardenPage } from './pages/garden.js';
import { renderHistoryPage } from './pages/history.js';
import { renderHomePage } from "./pages/home.js";
import { renderMoodPage } from "./pages/mood.js";


moodStorage.init();

const lazyPages = {
    team: () => import('./pages/team.js').then(m => m.renderTeamPage()),
    howto: () => import('./pages/howtouse.js').then(m => m.renderHowToUsePage()),
};

renderHistoryPage();
renderGardenPage();
renderAnalytics();
renderHomePage();
renderMoodPage();

const sidebar = document.getElementById('sidebar');

function openSidebar() {
    sidebar.classList.remove('hidden');
    sidebar.classList.add('flex', 'absolute', 'inset-y-0', 'left-0', 'bg-black/90');
}

function closeSidebar() {
    const isLg = window.innerWidth >= 1024;
    if (!isLg) {
        sidebar.classList.add('hidden');
        sidebar.classList.remove('flex', 'absolute', 'inset-y-0', 'left-0', 'bg-black/90');
    }
}

document.getElementById('mobile-open-btn').addEventListener('click', openSidebar);
document.getElementById('mobile-open-btn2').addEventListener('click', openSidebar);
document.getElementById('sidebar-close-btn').addEventListener('click', closeSidebar);

export function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    const page = document.getElementById('page-' + pageId);

    if (page) {
        page.classList.add('active');
    }

    document.querySelectorAll('[data-page="' + pageId + '"]').forEach(el => el.classList.add('active'));

    // Lazy-load the team and how-to-use pages only when the user navigates to them
    if (lazyPages[pageId]) {
        lazyPages[pageId]();
        delete lazyPages[pageId]; // Download the module only once
    }


    closeSidebar();
}

document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', () => navigateTo(el.dataset.page));
});

navigateTo('home');
