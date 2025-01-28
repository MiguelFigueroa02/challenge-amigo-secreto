// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// let cantidadAmigos = amigos.length;
// console.log(cantidadAmigos);
let AmigosSorteados = [];
let relacionAmigos =[];


function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;
    console.log(nombreDeAmigo);

    if(nombreDeAmigo === null || nombreDeAmigo.trim() ===""){
        alert ("Por favor, inserte un nombre.");
    } else {
        if (amigos.includes(nombreDeAmigo)){
            limpiarCaja();
            return
        }else {
            amigos.push(nombreDeAmigo);
            // asignarTextoElemento('li',nombreDeAmigo);
            asignarTextoElemento();
        }
        limpiarCaja();
    }
}

function limpiarCaja() {
    let valorCaja = document.getElementById('amigo').value = '';
}

function asignarTextoElemento() {
    let elementoHTML = document.getElementById('listaAmigos');
    elementoHTML.innerHTML = "";
    for (let i=0; i<amigos.length; i++){
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigos[i];
        elementoHTML.appendChild(nuevoAmigo);
    }
}
function sortearAmigo() {
    let cantidadAmigos = amigos.length;
    console.log(cantidadAmigos);
    let numeroAzar = Math.floor(Math.random()*cantidadAmigos);
    console.log(numeroAzar);
    let nombreUsuario = prompt('¿Cómo te llamas?');
    
    if (AmigosSorteados.length === cantidadAmigos) {
        resultado('Ya no hay amigos disponibles');
    } else {
        asignarAmigo(numeroAzar,nombreUsuario);
    }
    
}
function asignarAmigo(i,nombreUsuario) {
    let nombreResultado = amigos[i];
    console.log(nombreResultado);
        if (nombreUsuario == nombreResultado || AmigosSorteados.includes(nombreResultado)) {
            asignarAmigo(Math.floor(Math.random() * amigos.length), nombreUsuario);
        } else{
            resultado(`Tu amigo secreto es ${nombreResultado}`);
            relacionAmigos.push(`El amigo secreto de ${nombreUsuario} es ${nombreResultado}`);
            AmigosSorteados.push(nombreResultado);
            // AmigosSorteados.push(nombreUsuario);
        }
}

function resultado(texto) {
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML="";
    let resultadoAmigo = document.createElement("li");
    resultadoAmigo.textContent = texto;
    resultadoHTML.appendChild(resultadoAmigo);
}