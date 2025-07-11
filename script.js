const contactos = [
  { nombre: "Carlos Amato", hora: "11:50", foto: "https://randomuser.me/api/portraits/men/1.jpg" },
  { nombre: "Liz", hora: "12:00", foto: "https://randomuser.me/api/portraits/men/2.jpg" },
  { nombre: "Tyler", hora: "11:00", foto: "https://randomuser.me/api/portraits/men/3.jpg" },
  { nombre: "Paula", hora: "10:30", foto: "https://randomuser.me/api/portraits/women/4.jpg" },
  { nombre: "Jeff", hora: "12:37", foto: "https://randomuser.me/api/portraits/men/5.jpg" },
  { nombre: "Tapas", hora: "11:71", foto: "https://randomuser.me/api/portraits/men/6.jpg" },
  { nombre: "Candela", hora: "09:56", foto: "https://randomuser.me/api/portraits/women/7.jpg" },
  { nombre: "De paul", hora: "13:16", foto: "https://randomuser.me/api/portraits/men/8.jpg" },
  { nombre: "Alina", hora: "02:12", foto: "https://randomuser.me/api/portraits/women/9.jpg" }
];

const lista = document.getElementById("lista-contactos");

contactos.forEach(({ nombre, hora, foto }) => {
  const div = document.createElement("div");
  div.className = "contacto";
  div.innerHTML = `
    <div class="info-contacto">
      <img src="${foto}" alt="${nombre}" class="foto">
      <div>
        <div class="nombre">${nombre}</div>
        <div class="datos">11-1234-0932<br>Última conexión: ${hora}</div>
      </div>
    </div>
    <div class="botones">
      <button class="boton" onclick="chatear('${nombre}')">💬</button>
      <button class="boton" disabled>📞</button>
      <button class="boton" disabled>🎥</button>
    </div>
  `;
  lista.appendChild(div);
});

let nombreActual = "";

function chatear(nombre) {
  nombreActual = nombre;
  document.getElementById("vista-contactos").style.display = "none";
  document.getElementById("vista-chat").style.display = "flex";
  document.getElementById("nombre-contacto-chat").textContent = nombre;
  document.getElementById("chat-mensajes").innerHTML = ""; 
}

function volver() {
  document.getElementById("vista-chat").style.display = "none";
  document.getElementById("vista-contactos").style.display = "block";
}

function enviarMensaje() {
  const input = document.getElementById("mensaje");
  const texto = input.value.trim();
  if (texto !== "") {
    const div = document.createElement("div");
    div.className = "mensaje";
    div.textContent = texto;
    document.getElementById("chat-mensajes").appendChild(div);
    input.value = "";
    //respuesta automática
    setTimeout(() => {
      const respuesta = document.createElement("div");
      respuesta.className = "mensaje mensaje-contacto";
      respuesta.textContent = `Ok, ${nombreActual.split(" ")[0]} te responde 👍`;
      document.getElementById("chat-mensajes").appendChild(respuesta);
    }, 800);
  }
}
