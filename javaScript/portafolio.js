document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a.subrayado');

    links.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            link.classList.add('subrayados');
        });

        link.addEventListener('mouseleave', function() {
            if (!link.classList.contains('active')) {
                link.classList.remove('subrayados');
            }
        });
    });
});
