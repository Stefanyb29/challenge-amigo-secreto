// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo(){
 let inputAmigo = document.getElementById("amigo");
 let nombreAmigo = inputAmigo.value;
   console.log(nombreAmigo);

   if(nombreAmigo=== "") { 
    alert("Por favor, ingresa un nombre");
    return;
}

amigo.push(nombreAmigo);
inputAmigo.value = "";
mostrarAmigos();

}

function mostrarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent =  amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if(amigo.length < 2){
        alert ("Debes agrega mínimo 2 amigos")
        return;

    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
        
    }





























/*
function agregarAmigo() {
    const nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return; 
    }

    // Actualizar el array de amigos
    amigo.push(nombre);

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";

    // Actualizar la lista de amigos
    actualizarListaAmigo();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 
    
    // Crear un nuevo elemento de lista para cada amigo
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
*/