document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".halo-card");
    const grid = document.querySelector(".halo-grid");

    function clearExpanded() {
        cards.forEach(c => c.classList.remove("expanded"));
        grid.classList.remove("dimmed");
    }

    cards.forEach(card => {

        card.addEventListener("click", (e) => {
            e.stopPropagation(); // prevents triggering document click

            const isExpanded = card.classList.contains("expanded");

            clearExpanded();

            if (!isExpanded) {
                card.classList.add("expanded");
                grid.classList.add("dimmed");
            }
        });

    });

    // CLICK OUTSIDE TO CLOSE
    document.addEventListener("click", () => {
        clearExpanded();
    });

});
