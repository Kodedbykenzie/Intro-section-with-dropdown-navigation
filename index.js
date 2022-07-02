const btnAbrir = document.querySelector('#btnAbrir'),
    navegacion = document.querySelector('.navegacion')
bg = document.querySelector('.bg'),
    inicioImagen = document.querySelector('#inicio-imagen'),
    modalFeatures = document.querySelector('#modal-features'),
    modalCompany = document.querySelector('#modal-company'),
    modal = document.querySelectorAll('.modal'),
    modalArrow = document.querySelectorAll('#modal-arrow');

let contador = 0;

// Abrir el menu
btnAbrir.addEventListener('click', function() {
    if (contador === 0) {
        bg.style.display = 'block';
        navegacion.style.transform = 'translateX(0)';
        btnAbrir.src = "images/icon-close-menu.svg";
        contador++;
    } else {
        navegacion.style.transform = 'translateX(100%)';
        btnAbrir.src = "images/icon-menu.svg";
        setTimeout(function() {
            bg.style.display = 'none';
        }, 200);
        contador--;
    }
});

// Cerrar el menu haciendo click en la pantalla
bg.addEventListener('click', function() {
    navegacion.style.transform = 'translateX(100%)';
    btnAbrir.src = "images/icon-menu.svg";
    setTimeout(function() {
        bg.style.display = 'none';
    }, 200);
    contador--;
});

// Abrir el modal "Company" le pasamos la posicion del modal que abriremos, y la posicion del modal que vamos a cerrar
modalFeatures.addEventListener('click', function() {
    abrirModal(0, 1)
});

// Abrir el modal "Company" le pasamos la posicion del modal que abriremos, y la posicion del modal que vamos a cerrar
modalCompany.addEventListener('click', function() {
    abrirModal(1, 0)
});


// Cuando se cambie el tamaño de la ventana, si el modal esta abierto lo cerramos
window.addEventListener('resize', function() {
    if (modal.classList.contains("dpblock")) {
        modal.classList.remove("dpblock")
    }
});

// Funcion dinamica para abrir el modal recibiendo la posicion en el array
function abrirModal(p, e) {
    if (modal[e].classList.contains("dpblock")) {
        modal[e].classList.remove("dpblock")
        modalArrow[e].style.transform = "rotate(-0deg)"
        modalArrow[e].style.transition = "transform .3s"
    }
    modal[p].classList.toggle("dpblock")
    if (modal[p].classList.contains("dpblock")) {
        modalArrow[p].style.transform = "rotate(-180deg)"
        modalArrow[p].style.transition = "transform .3s"
    } else {
        modalArrow[p].style.transform = "rotate(-0deg)"
        modalArrow[p].style.transition = "transform .3s"
    }

}