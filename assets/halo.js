<script>
let backdrop = null;

document.addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll('.halo-card');

    cards.forEach(card => {

        card.addEventListener('click', () => {

            // If already expanded → close
            if (card.classList.contains('is-expanded')) {
                closeExpanded();
                return;
            }

            openExpanded(card);
        });

    });

});

function openExpanded(card) {

    // create backdrop once
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'halo-backdrop';
        document.body.appendChild(backdrop);

        backdrop.addEventListener('click', closeExpanded);
    }

    // expand selected card
    card.classList.add('is-expanded');

    document.body.classList.add('modal-open');
}

function closeExpanded() {

    document.querySelectorAll('.halo-card.is-expanded')
        .forEach(card => card.classList.remove('is-expanded'));

    if (backdrop) {
        backdrop.remove();
        backdrop = null;
    }

    document.body.classList.remove('modal-open');
}

// ESC support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeExpanded();
});
</script>
