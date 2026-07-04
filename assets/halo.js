document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".halo-card");
    const grid = document.querySelector(".halo-grid");

    function clearExpanded() {
        cards.forEach(c => c.classList.remove("expanded"));
        if (grid) grid.classList.remove("dimmed");
    }

    cards.forEach(card => {

        card.addEventListener("click", (e) => {
            e.stopPropagation();

            const isExpanded = card.classList.contains("expanded");

            clearExpanded();

            if (!isExpanded) {
                card.classList.add("expanded");
                if (grid) grid.classList.add("dimmed");
            }
        });

    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".halo-card")) {
            clearExpanded();
        }
    });

});
