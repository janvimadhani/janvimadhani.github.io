document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".halo-card").forEach(card => {
        card.addEventListener("click", () => {

            const isExpanded = card.classList.contains("expanded");

            document.querySelectorAll(".halo-card")
                .forEach(c => c.classList.remove("expanded"));

            if (!isExpanded) {
                card.classList.add("expanded");
            }
        });
    });

});
