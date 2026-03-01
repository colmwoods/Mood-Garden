# 🌱 Mood Garden

**Live Demo:**  
https://mood-garden-nsy9ocd0g-colm-woods-projects.vercel.app/

Mood Garden is a calming mood-tracking web application built during a 4-day MVP sprint.  
Users can log daily emotions using expressive flower icons, explore mood trends, and reflect on their emotional journey through a clean, responsive interface.

---

## 📸 Screenshots

> Store images inside a `/screenshots` folder in the root of the project.

### 🏠 Home
![Home Screenshot](./screenshots/home.png)

### 🌸 Log Mood
![Log Mood Screenshot](./screenshots/log-mood.png)

### 🌿 Garden
![Garden Screenshot](./screenshots/garden.png)

### 📊 Analytics
![Analytics Screenshot](./screenshots/analytics.png)

### 🕰️ History
![History Screenshot](./screenshots/history.png)

### 👥 Team
![Team Screenshot](./screenshots/team.png)

### ❓ How To Use
![How To Use Screenshot](./screenshots/how-to-use.png)

---

## 📱 Mobile Experience

Device: 375 x 824
Zoom: 100%

### 🏠 Home
![Home Screenshot](./screenshots/mobile-home.png)

### 🌸 Log Mood
![Log Mood Screenshot](./screenshots/mobile-log-mood.png)

### 🌿 Garden
![Garden Screenshot](./screenshots/mobile-garden.png)

### 📊 Analytics
![Analytics Screenshot](./screenshots/mobile-analytics.png)

### 🕰️ History
![History Screenshot](./screenshots/mobile-history.png)

### 👥 Team
![Team Screenshot](./screenshots/mobile-team.png)

### ❓ How To Use
![How To Use Screenshot](./screenshots/mobile-how-to-use.png)


---

## 🌟 Features

- 🌸 Log daily moods with emoji-based input
- 🌿 Visual mood garden representation
- 📊 Analytics dashboard with mood distribution
- 🕰️ Historical mood tracking
- 👥 Dedicated Team page
- ❓ How To Use guide
- 💾 LocalStorage data persistence
- 📱 Fully responsive layout
- ⚡ Modular ES module structure

---

## 🛠️ Built With

- **Vite** – Frontend build tool
- **Vanilla JavaScript (ES Modules)**
- **TailwindCSS** – Utility-first styling
- **Font Awesome** – Icon library
- **LocalStorage API** – Persistent browser storage
- **Vercel** – Deployment platform

---

## 📂 Project Structure

```
📦 mood-garden
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ analytics.js
 ┃ ┃ ┣ garden.js
 ┃ ┃ ┣ howtouse.js
 ┃ ┃ ┣ team.js
 ┃ ┃ ┗ storage.js
 ┃ ┣ 📂 styles
 ┃ ┃ ┗ main.css
 ┃ ┣ main.js
 ┃ ┗ storage.js
 ┣ index.html
 ┣ package.json
 ┗ vite.config.js
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/mood-garden.git
cd mood-garden
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run development server

```bash
npm run dev
```

Visit in browser:

```
http://localhost:5173
```

---

## 📦 Production Build

To build for production:

```bash
npm run build
```

The optimized files will be generated in the `dist/` folder.

---

## 🧭 Navigation System

Mood Garden uses a lightweight client-side navigation system:

- Buttons use `data-page="pageName"`
- Pages match `<div id="page-pageName">`
- `navigateTo(pageId)` controls dynamic page switching
- Both sidebars share the same navigation logic

This keeps routing simple, modular, and dependency-free.

---

## 💾 Data Storage

Mood entries are stored in the browser using `localStorage`.

Each entry contains:
- Mood type
- User note
- Date

Data persists across sessions without requiring a backend.

---

## 🧠 Future Improvements

- 📈 Chart.js integration for interactive analytics
- 🔐 User authentication system
- ☁️ Backend + database integration
- 🌈 Theme switching
- 🧪 Unit testing
- 📊 Exportable mood reports

---

## 👥 Team & Sprint

**4-Day MVP Sprint | 5 Developers**

- [Colm Woods](https://github.com/colmwoods)
- [Florin](https://github.com/11florin)
- [Kostiantyn](https://github.com/barkode)
- [Azamat](https://github.com/akashebaev-ux)
- [Aisha](https://github.com/aishieee)

---

## 📄 License

MIT License © 2026 Colm Woods