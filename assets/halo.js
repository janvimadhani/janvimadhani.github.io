<script>
let backdrop = null;
document.body.classList.add('modal-open');

document.querySelectorAll('.halo-card').forEach(card => {
    card.addEventListener('click', () => {

        // create backdrop if it doesn't exist
        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.className = 'halo-backdrop';
            document.body.appendChild(backdrop);

            backdrop.addEventListener('click', closeExpanded);
        }

        card.classList.add('is-expanded');
        document.body.style.overflow = 'hidden';
    });
});

function closeExpanded() {
    document.querySelectorAll('.halo-card.is-expanded')
        .forEach(card => card.classList.remove('is-expanded'));

    if (backdrop) {
        backdrop.remove();
        backdrop = null;
    }

    document.body.style.overflow = '';
}

// ESC key support (highly recommended)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeExpanded();
});
document.body.classList.remove('modal-open');
</script>
