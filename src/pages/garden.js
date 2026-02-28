import { getMoods } from "../storage.js";

export function renderGarden() {
  document.getElementById("app").innerHTML = `
    <h1>🌿 Garden</h1>
    <div id="garden" class="garden"></div>
    <div id="info" class="info-box"></div>
    <button id="backBtn">Back to Home</button>
  `;
  initGardenLogic();
}

// ---------Page Logic -----------

function initGardenLogic() {
  // Retrive all saved mood entries from storage
  const moods = getMoods();
  const garden = document.getElementById("garden");

  // Render a plant for each logged mood
  renderAllPlants(moods, garden);

  // Enable hoover behaviour for plant information
  setUpHoover(garden);

  // Enable navigation back to the home page
  setupBackButton();
}

// Create a plant element for every mood entry
function renderAllPlants(moods, garden) {
  moods.forEach((entry) => {
    const plant = document.createElement("img");

    //Chose the correct pant image based on mood type
    plant.src = getPlantImage(entry.mood);
    plant.classList.add("plant");

    // Store useful information for hoover display
    plant.dataset.date = entry.date;
    plant.dataset.mood = entry.mood;
    plant.dataset.note = entry.note || "No notes";

    garden.appendChild(plant);
  });
}

// Return the appropriate plant image for each mood
function getPlantImage(mood) {
  switch (mood) {
    case "happy":
      return "img/happy.jpg";
    case "sad":
      return "img/sad.png";
    case "calm":
      return "img/calm.png";
    case "angry":
      return "img/angry.png";
    case "anxious":
      return "img/anxious.jpg";
    default:
      return "img/default.png";
  }
}

// Display mood details when hovering over a plant
function setupHoover(garden) {
  const info = document.getElementById("info");

  garden.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("plant")) {
      info.innerHTML = `
      <strong>Date:</strong> ${e.target.dataset.date}<br>
      <strong>Mood:</strong> ${e.target.dataset.mood}<br>
      <strong>Note:</strong> ${e.target.dataset.note}
      `;
    }
  });

  garden.addEventListener('mouseover', () => {
    info.textContent = '';
  });
}


// Navigate back to the home page
function setupBackButton() {
  document.getElementById('backBtn').addEventListener('click', () => {
    location.hash = '/';
  });
}