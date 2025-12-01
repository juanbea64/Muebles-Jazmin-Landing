const datoNombre = document.querySelector('#nombre');
const datoEmail = document.querySelector('#email');
const datoNumeroCont = document.querySelector('#telefono');
const datoMensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#btnEnviar');

var mensaje;

function enviar() {
  mensaje = 'https://api.whatsapp.com/send?phone=573187925297&text=${datoNombre.value}%20${datoEmail.value}%20${datoNumeroCont.value}%20${datoMensaje.value}';
  btnEnviar.href=mensaje;
}