console.log("halo.js loaded");

const cards = document.querySelectorAll(".halo-card");
const grid = document.querySelector(".halo-grid");

console.log("Found", cards.length, "cards");

function clearExpanded() {
  cards.forEach(c => c.classList.remove("expanded"));
  if (grid) grid.classList.remove("dimmed");
}

cards.forEach((card, i) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const wasExpanded = card.classList.contains("expanded");

    clearExpanded();

    if (!wasExpanded) {
      card.classList.add("expanded");
      if (grid) grid.classList.add("dimmed");
    }

    console.log("expanded?", card.classList.contains("expanded"));
  });
});
