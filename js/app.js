// Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviado = document.getElementById('enviar-mail');
const btnReset = document.getElementById('resetBtn');

// Event
EventListener();

function EventListener() {
    document.addEventListener('DOMContentLoaded', InicioApp);

    // Validar campos 
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Gifs 
    btnEnviar.addEventListener('click', enviarEmail);

    //Resetear
    btnReset.addEventListener('click', resetearForm);
}


// Function

function InicioApp() {
    btnEnviar.disabled = true;
};

function validarCampo() {

    validarLongitud(this);
    if (this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length == 0) {
            btnEnviar.disabled = false;
        }
    }
};

function enviarEmail() {
    const spinnerGif = document.getElementById('spinner')
    spinnerGif.style.display = 'block';

    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    setTimeout(function() {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(function() {
            enviado.remove();
            formularioEnviado.reset();
        }, 5000);
    }, 3000);
};

function resetearForm(e) {
    formularioEnviado.reset();
    e.preventDefault();
}

function validarLongitud(campo) {
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
};

function validarEmail(campo) {
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}