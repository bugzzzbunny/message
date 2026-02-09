// script.js
const layers = [
  "There’s something I only think about after midnight.",
  "It shows up when the lights are low and my guard is even lower.",
  "It’s that warm, restless pull toward you — the one I pretend I can ignore, but it keeps brushing against my thoughts like fingertips tracing a secret.",
  "If I’m honest… you’re the reason the night feels hotter than it should."
];

const layerText = document.getElementById("layer-text");
const layerCounter = document.getElementById("layer-counter");
const app = document.querySelector(".app");

let index = 0;

function updateLayer() {
  layerText.classList.remove("fade-in");
  void layerText.offsetWidth; 
  layerText.classList.add("fade-in");

  layerText.textContent = layers[index];
  layerCounter.textContent = `${index + 1} / ${layers.length}`;
}

app.addEventListener("click", () => {
  if (index < layers.length - 1) {
    index++;
    updateLayer();
  }
});

const style = document.createElement("style");
style.textContent = `
  .fade-in {
    animation: fadeIn 260ms ease-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

updateLayer();
