let slide = 1;
//Variables
const bodyLabel = document.querySelector('BODY');
const openBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');
const nav = document.querySelector('.nav');
const formulario = document.querySelector('.contact');
const contactInput = document.querySelector('.contact__email');
const contactBtn = document.querySelector('.contact__button');


document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
})

function iniciarApp() {
    //Funcion que registra los eventos
    eventListeners();

    //Muestra el testimonial al cual se le da click
    mostrarTestimonial();

    //Oculta o muestra un testimonial segun el boton que se presione
    cambiarTestimonial();

}

function eventListeners() {
    openBtn.addEventListener('click', mobileMenu);
    closeBtn.addEventListener('click', mobileMenu);
    formulario.addEventListener('submit', enviarEmail);
}


function mobileMenu(e) {
    e.preventDefault();

    if(nav.classList.contains('nav__hidden')) {
        nav.classList.remove('nav__hidden');
        nav.classList.add('nav__active');
        openBtn.style.display = 'none';
        closeBtn.style.display = 'block';
        bodyLabel.classList.add('body__bg');
    } else {
        nav.classList.add('nav__hidden');
        nav.classList.remove('nav__active');
        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';
        bodyLabel.classList.remove('body__bg');
    }

}

//Muestra un mensaje de alerta
function mostrarAlerta(alerta) {
    const mensaje = document.createElement('P');
    mensaje.textContent = alerta;
    mensaje.classList.add('error');
    formulario.appendChild(mensaje);

    setTimeout(() => {
        mensaje.remove();
    }, 4000);

}
//Valida el contenido del input Email
function enviarEmail(e) {
    e.preventDefault();
    if(contactInput.value.trim() === '') {
        mostrarAlerta('This field can\'t be empty');

        return;
    } 
    const exito = document.createElement('P');
    exito.classList.add('exito');
    exito.textContent = 'thanks for subscribing!'
    formulario.appendChild(exito);

    setTimeout(() => {
        exito.remove();
    }, 3000);
    formulario.reset();
}

function mostrarTestimonial() {
     const actual = document.querySelector(`#slide-${slide}`);
     actual.classList.add('mostrar-testimonial');

    ///Resalta el boton actual
     const bntActual = document.querySelector(`[data-slide="${slide}"]`);
     bntActual.classList.add('slide-btn-actual');

}

function cambiarTestimonial() {
    const botones = document.querySelectorAll('.slider .slide-btn');
    botones.forEach( boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            slide = parseInt(e.target.dataset.slide);

            //Eliminar mostrar-testimonial del boton anterior
            document.querySelector('.mostrar-testimonial').classList.remove('mostrar-testimonial');

            //Agrega mostrar-testimonial en donde le dimos click
            const testimonial = document.querySelector(`#slide-${slide}`);
            testimonial.classList.add('mostrar-testimonial');

            //Elimina la clase slide-btn-actual
            botones.forEach(btn => {
                btn.classList.remove('slide-btn-actual')
            })

            //Agregar la clase de slide-btn-actual en el nuevo boton
            const bntActual = document.querySelector(`[data-slide="${slide}"]`);
             bntActual.classList.add('slide-btn-actual');

        });
    });
}
