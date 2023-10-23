document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a.subrayado-conoceme');

    links.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            link.classList.add('sub');
        });

        link.addEventListener('mouseleave', function() {
            if (!link.classList.contains('active')) {
                link.classList.remove('sub');
            }
        });
    });
});



//Imagen transicion 
const imagen = document.getElementById('imagen1');

imagen.addEventListener('mouseover', () => {
    imagen.classList.add('imagen2');
});

imagen.addEventListener('mouseout', () => {
    imagen.classList.remove('imagen2');
});

//Frase

const frase = document.getElementById('frase');
const autor = document.getElementById('autor');

imagen.addEventListener('mouseover', () => {
    frase.style.color = '#CDA434'; // Cambia el color de la frase
    autor.style.color = '#000080'; // Cambia el color del autor
});

imagen.addEventListener('mouseout', () => {
    frase.style.color = ''; // Restaura el color original de la frase
    autor.style.color = ''; // Restaura el color original del autor
});
