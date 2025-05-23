let amigos = [];

/**
 * Agrega un nuevo amigo al array de amigos.
 * Valida que el nombre no esté vacío antes de agregarlo y actualiza la lista visual.
 */
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;
  
  // Expresión regular para validar si contiene números o caracteres especiales
  let regex = /[^a-zA-Z\s]/;
  
  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre válido");
  } else if (regex.test(nombreAmigo)) {
    alert("El nombre no debe contener números ni caracteres especiales");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

/**
 * Actualiza la visualización de la lista de amigos en el DOM, creando elementos <li> para cada amigo.
 */
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

/**
 * Sortea y muestra un amigo de la lista de amigos de manera aleatoria.
 * Verifica que la lista no esté vacía antes de realizar el sorteo.
 */
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let amigoSorteado = amigos[indiceAmigo];
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.textContent = `¡El amigo secreto es: ${amigoSorteado}!`;

  // Limpiar campo y lista después de descubrir el amigo secreto
document.querySelector("#amigo").value = "";
amigos = [];
mostrarListaAmigo();
  }
}
const botonAgregar = document.getElementById('botonAgregar');
botonAgregar.addEventListener('click', agregarAmigo);
