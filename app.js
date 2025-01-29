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
    let elementoHTML = limpiarListaAmigos();
    // elementoHTML.innerHTML = "";
    limpiarListaAmigos();
    for (let i=0; i<amigos.length; i++){
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigos[i];
        elementoHTML.appendChild(nuevoAmigo);
    }
}
function limpiarListaAmigos() {
    let valorHTML = document.getElementById('listaAmigos');
    valorHTML.innerHTML = "";
    return valorHTML;
}
function sortearAmigo() {
    let cantidadAmigos = amigos.length;
    limpiarListaAmigos();
    // console.log(cantidadAmigos);
    // let numeroAzar = Math.floor(Math.random()*cantidadAmigos);
    // console.log(numeroAzar);
    // let nombreUsuario = prompt('¿Cómo te llamas?');
    if (AmigosSorteados.length === cantidadAmigos) {
        resultado('Ya no hay amigos disponibles');
        document.querySelector('#boton-sortear').setAttribute('disabled','true');
    } else {
        // let cantidadAmigos = amigos.length;
        console.log(cantidadAmigos);
        let numeroAzar = Math.floor(Math.random()*cantidadAmigos);
        console.log(numeroAzar);
        let nombreUsuario = prompt('¿Cómo te llamas?');
        if (amigos.includes(nombreUsuario)) {
            asignarAmigo(numeroAzar,nombreUsuario);
        } else {
            alert(`Hola ${nombreUsuario}. No estás incluido entre los amigos`)
        }
    }
    
    // if (amigos.includes(nombreUsuario)) {
    //     if (AmigosSorteados.length === cantidadAmigos) {
    //         resultado('Ya no hay amigos disponibles');
    //         document.querySelector('#boton-sortear').setAttribute('disabled','true');
    //     } else {
    //         asignarAmigo(numeroAzar,nombreUsuario);
    //     }
    // } else {
    //     alert(`Hola ${nombreUsuario}. No estás incluido entre los amigos`)
    // }
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