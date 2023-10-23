
//Se suubraye el navbar
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a.s');

    links.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            link.classList.add('subra');
        });

        link.addEventListener('mouseleave', function() {
            if (!link.classList.contains('active')) {
                link.classList.remove('subra');
            }
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    // Envía el correo a través de un cliente de correo predeterminado
    window.location.href = 'mailto:itzelaviles2709@gmail.com?subject=Contacto&body=Nombre: ' + nombre + '%0D%0ACorreo Electrónico: ' + email + '%0D%0AMensaje: ' + mensaje;
});
