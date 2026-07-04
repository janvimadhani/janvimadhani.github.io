console.log("halo.js loaded");

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".halo-card");
    const grid = document.querySelector(".halo-grid");

    console.log("Found", cards.length, "cards");

    function clearExpanded() {
        cards.forEach(c => c.classList.remove("expanded"));
        if (grid) grid.classList.remove("dimmed");
    }

    cards.forEach((card, i) => {

        card.addEventListener("click", (e) => {

            console.log("Clicked", i);

            e.stopPropagation();

            const expanded = card.classList.contains("expanded");

            clearExpanded();

            if (!expanded) {
                console.log("Adding expanded");
                card.classList.add("expanded");
                if (grid) grid.classList.add("dimmed");
            }

        });

    });

    document.addEventListener("click", () => {
        clearExpanded();
    });

});
