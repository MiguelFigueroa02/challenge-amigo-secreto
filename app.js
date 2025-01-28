// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;
    console.log(nombreDeAmigo);

    if(nombreDeAmigo === null || nombreDeAmigo.trim() ===""){
        alert ("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreDeAmigo);
        for(let i = 0;i < amigos.length; i++){
            asignarTextoElemento('li',nombreDeAmigo);
        }
        limpiarCaja();
    }
}

function limpiarCaja() {
    let valorCaja = document.getElementById('amigo').value = '';
}

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.getElementById('listaAmigos');
    elementoHTML.innerHTML = texto;
    return;
}

// function amigoHTML() {
//     for (let i=0, i<amigos.length; i++){
//         asignarTextoElemento('li',nombreDeAmigo);
//     }
// }