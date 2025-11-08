const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", e => {
  e.preventDefault();
  msg.textContent = "¡Mensaje enviado correctamente!";
  form.reset();
});
