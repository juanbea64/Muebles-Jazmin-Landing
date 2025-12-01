const datoNombre = document.querySelector('#nombre');
const datoEmail = document.querySelector('#email');
const datoNumeroCont = document.querySelector('#telefono');
const datoMensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#btnEnviar');
const contactForm = document.querySelector('#contactForm');

// Número de WhatsApp de Muebles Jazmín
const numeroWhatsApp = '573142018144';

function enviar(e) {
  e.preventDefault();
  
  // Validar campos
  if (!datoNombre.value || !datoEmail.value || !datoNumeroCont.value || !datoMensaje.value) {
    alert('Por favor completa todos los campos');
    return false;
  }
  
  // Construir mensaje formateado
  const textoMensaje = `*Nuevo mensaje desde la web* 🏠

*Nombre:* ${datoNombre.value}
*Email:* ${datoEmail.value}
*Teléfono:* ${datoNumeroCont.value}

*Mensaje:*
${datoMensaje.value}`;

  // Codificar el mensaje para URL
  const mensajeCodificado = encodeURIComponent(textoMensaje);
  
  // Crear enlace de WhatsApp
  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensajeCodificado}`;
  
  // Abrir WhatsApp en nueva pestaña
  window.open(urlWhatsApp, '_blank');
  
  return false;
}

// Manejar el envío del formulario
if (contactForm) {
  contactForm.addEventListener('submit', enviar);
}

// También manejar click en el botón
if (btnEnviar) {
  btnEnviar.addEventListener('click', enviar);
}