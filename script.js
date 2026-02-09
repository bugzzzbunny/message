// script.js
const layers = [
  "There’s something I only think about after midnight.",
  "It shows up when the lights are low and my guard is even lower.",
  "It’s that warm, restless pull toward you — the one I pretend I can ignore, but it keeps brushing against my thoughts like fingertips tracing a secret.",
  "If I’m honest… you’re the reason the night feels hotter than it should."
];

const layerText = document.getElementById("layer-text");
const layerCounter = document.getElementById("layer-counter");
const nextBtn = document.getElementById("next-btn");

let index = 0;

function updateLayer() {
  layerText.classList.remove("fade-in");
  void layerText.offsetWidth; // restart animation
  layerText.classList.add("fade-in");

  layerText.textContent = layers[index];
  layerCounter.textContent = `${index + 1} / ${layers.length}`;

  if (index === layers.length - 1) {
    nextBtn.textContent = "end of the night";
    nextBtn.disabled = true;
    nextBtn.style.opacity = "0.6";
    nextBtn.style.cursor = "default";
  }
}

nextBtn.addEventListener("click", () => {
  if (index < layers.length - 1) {
    index++;
    updateLayer();
  }
});

// simple fade-in effect via CSS class
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
