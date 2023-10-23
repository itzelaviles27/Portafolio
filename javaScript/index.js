document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a.nav-link');

    links.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            link.style.color = 'green';
            link.style.textDecoration = 'underline';
        });

        link.addEventListener('mouseleave', function() {
            link.style.color = 'black';
            link.style.textDecoration = 'none';
        });
    });
});
