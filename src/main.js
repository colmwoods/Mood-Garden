import './styles/main.css'

import { renderGarden } from './pages/garden.js'
import { renderAnalytics } from './pages/analytics.js'

import { showTeamModal } from "./pages/team.js"
import { showHowToUseModal } from "./pages/howtouse.js"

const routes = {
    '/garden': renderGarden,
    '/analytics': renderAnalytics
}

function router() {
    const path = location.hash.replace('#', '')

    if (!path) return // Stay on index.html main layout

    const page = routes[path]

    if (!page) return

    const app = document.getElementById('app')
    app.innerHTML = ''
    page()
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)

window.addEventListener('DOMContentLoaded', () => {
    const teamBtn = document.getElementById("teamBtn")
    const howToUseBtn = document.getElementById("howToUseBtn")

    if (teamBtn) teamBtn.onclick = showTeamModal
    if (howToUseBtn) howToUseBtn.onclick = showHowToUseModal
})