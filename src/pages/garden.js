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
  const garden = document.getElementById('garden');

  // Render a plant for each logged mood
  renderAllPlants(moods, garden);

  // Enable hoover behaviour for plant information
  setUpHoover(garden);

  // Enable navigation back to the home page
  setupBackButton();
}