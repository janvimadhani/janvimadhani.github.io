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



// for gifs on planes page 
const cards = document.querySelectorAll(".scenario-card");

cards.forEach(card => {
    card.addEventListener("click", (e) => {
        e.stopPropagation();

        const grid = card.closest(".scenario-grid");
        const expanded = card.classList.contains("expanded");

        // Collapse all cards first
        grid.querySelectorAll(".scenario-card").forEach(c => {
            c.classList.remove("expanded");
        });

        if (expanded) {
            grid.classList.remove("dimmed");
        } else {
            card.classList.add("expanded");
            grid.classList.add("dimmed");
        }
    });
});

// Click anywhere outside the cards to collapse
document.addEventListener("click", (e) => {
    document.querySelectorAll(".scenario-grid").forEach(grid => {
        if (!grid.contains(e.target)) {
            grid.classList.remove("dimmed");
            grid.querySelectorAll(".scenario-card").forEach(card => {
                card.classList.remove("expanded");
            });
        }
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.querySelectorAll(".scenario-grid").forEach(grid => {
            grid.classList.remove("dimmed");
            grid.querySelectorAll(".scenario-card").forEach(card => {
                card.classList.remove("expanded");
            });
        });
    }
});
