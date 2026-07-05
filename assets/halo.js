console.log("halo.js loaded");

/* ---------------------------
   HALO CARDS
---------------------------- */

const haloCards = document.querySelectorAll(".halo-card");
const haloGrid = document.querySelector(".halo-grid");

console.log("Found", haloCards.length, "halo cards");

function clearHaloExpanded() {
  haloCards.forEach((card) => card.classList.remove("expanded"));
  haloGrid?.classList.remove("dimmed");
}

haloCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const wasExpanded = card.classList.contains("expanded");

    clearHaloExpanded();

    if (!wasExpanded) {
      card.classList.add("expanded");
      haloGrid?.classList.add("dimmed");
    }

    console.log("halo expanded?", card.classList.contains("expanded"));
  });
});

/* ---------------------------
   SCENARIO CARDS
---------------------------- */

const scenarioCards = document.querySelectorAll(".scenario-card");

function clearScenarioExpanded(grid) {
  grid.classList.remove("dimmed");
  grid.querySelectorAll(".scenario-card").forEach((card) => {
    card.classList.remove("expanded");
  });
}

scenarioCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const grid = card.closest(".scenario-grid");
    const wasExpanded = card.classList.contains("expanded");

    clearScenarioExpanded(grid);

    if (!wasExpanded) {
      card.classList.add("expanded");
      grid.classList.add("dimmed");
    }
  });
});

/* ---------------------------
   CLICK OUTSIDE TO CLOSE
---------------------------- */

document.addEventListener("click", (e) => {
  if (haloGrid && !e.target.closest(".halo-card")) {
    clearHaloExpanded();
  }

  document.querySelectorAll(".scenario-grid.dimmed").forEach((grid) => {
    if (!grid.contains(e.target)) {
      clearScenarioExpanded(grid);
    }
  });
});

/* ---------------------------
   ESC TO CLOSE
---------------------------- */

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    clearHaloExpanded();

    document.querySelectorAll(".scenario-grid.dimmed").forEach((grid) => {
      clearScenarioExpanded(grid);
    });
  }
});
