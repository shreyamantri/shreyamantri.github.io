document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.toc a');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();

        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    }
});