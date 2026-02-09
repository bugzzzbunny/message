// Handle mood selection → show mini tree
document.querySelectorAll('.mood-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const mood = btn.dataset.mood;

    // Fade out orbit
    const orbitContainer = document.querySelector('.orbit-container');
    orbitContainer.style.opacity = 0;
    orbitContainer.style.pointerEvents = 'none';

    // Show the correct mini-tree
    const tree = document.querySelector(`#tree-${mood}`);
    tree.classList.add('active');
  });
});
