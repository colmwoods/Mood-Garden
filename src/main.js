import './style.css'


import { renderGarden } from './pages/garden.js'
import { renderAnalytics } from './pages/analytics.js'
import {renderLoggingPage} from './pages/mode.js'


const routes = {
    '/': renderLoggingPage,
    '/garden': renderGarden,
    '/analytics': renderAnalytics,
}

function router() {
    const path = location.hash.replace('#', '') || '/'
    const page = routes[path] || renderHome

    const app = document.getElementById('app')
    app.innerHTML = ''

    page()
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)