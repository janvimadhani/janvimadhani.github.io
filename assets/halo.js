console.log("halo.js loaded");

const cards = document.querySelectorAll(".halo-card");
const grid = document.querySelector(".halo-grid");

console.log("Found", cards.length, "cards");

function clearExpanded() {
    cards.forEach(c => c.classList.remove("expanded"));
    grid?.classList.remove("dimmed");
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

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".halo-card")) {
            clearExpanded();
        }
    });

    document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        clearExpanded();
    }
});

    console.log("expanded?", card.classList.contains("expanded"));
  });
});



document.querySelectorAll(".scenario-card").forEach((card) => {
  card.addEventListener("click", () => {
    const grid = card.closest(".scenario-grid");
    const alreadyExpanded = card.classList.contains("expanded");

    grid.querySelectorAll(".scenario-card").forEach((c) => {
      c.classList.remove("expanded");
    });

    if (alreadyExpanded) {
      grid.classList.remove("dimmed");
    } else {
      card.classList.add("expanded");
      grid.classList.add("dimmed");
    }
  });
});

document.addEventListener("click", (e) => {
  const openGrid = document.querySelector(".scenario-grid.dimmed");

  if (openGrid && !e.target.closest(".scenario-card")) {
    openGrid.classList.remove("dimmed");
    openGrid.querySelectorAll(".scenario-card").forEach((card) => {
      card.classList.remove("expanded");
    });
  }
});
