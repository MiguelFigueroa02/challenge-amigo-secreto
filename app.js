// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// let cantidadAmigos = amigos.length;
// console.log(cantidadAmigos);
let AmigosSorteados = [];
let relacionAmigos =[];
//29 ene 25
let listaUsuarios = [];
let amigosRestantes = [];
let usuarioFinal = [];


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
        textoFinal('Ya no hay amigos disponibles');
        document.querySelector('#boton-sortear').setAttribute('disabled','true');
    } else {
        // let cantidadAmigos = amigos.length;
        console.log(cantidadAmigos);
        let numeroAzar = Math.floor(Math.random()*cantidadAmigos);
        console.log(numeroAzar);
        let nombreUsuario = prompt('¿Cómo te llamas?');
        if (amigos.includes(nombreUsuario)) {
            asignarAmigo(numeroAzar,nombreUsuario);
            //29 ene 25 se ingresa nombre de usuario a arreglo
            listaUsuarios.push(nombreUsuario);
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
            //29 ene 25 se agrega sentencia else if
        } else if (amigos.length - AmigosSorteados.length === 2) {
            console.log('Sólo quedan dos amigos');
            console.log(`el nombre resultado es ${nombreResultado}`);
            
            for(let i= 0; i < amigos.length; i++){
                if(relacionAmigos.includes(amigos[i])) {
                    continue;
                } else {
                    amigosRestantes.push(amigos[i]);
                }
            }

            if (relacionAmigos.includes(nombreUsuario) && amigosRestantes.length == 1){
                nombreResultado = amigosRestantes [0];
                resultado(nombreResultado,nombreUsuario);
            } else {
                let z = Math.floor(Math.random() * relacionAmigos.length);
                nombreResultado = relacionAmigos[z];
                resultado(nombreResultado,nombreUsuario);
            }
            
            // for (let m = 0; m < amigosRestantes.length; m++) {
            //     if (listaUsuarios.includes(amigosRestantes[m])) {
            //         continue;
            //     } else{
            //         console.log(`El que se supone que es tu compa es ${amigosRestantes[m]}`)
            //         //de aquí pal resultado
            //         nombreResultado = amigosRestantes[m];
            //         resultado(nombreResultado,nombreUsuario);
            //         break;
            //     }
            // }
        } else{
            // resultado(`Tu amigo secreto es ${nombreResultado}`);
            // relacionAmigos.push(`El amigo secreto de ${nombreUsuario} es ${nombreResultado}`);
            relacionAmigos.push(nombreResultado);
            relacionAmigos.push(nombreUsuario);
            resultado(nombreResultado,nombreUsuario);
        }
}

function resultado(nombreResultado,nombreUsuario) {
    // console.log(`El amigo secreto de ${nombreUsuario} es ${nombreResultado}`);
    // AmigosSorteados.push(nombreResultado);
    // let texto = `Tu amigo secreto es ${nombreResultado}`;
    // let resultadoHTML = document.getElementById('resultado');
    // resultadoHTML.innerHTML="";
    // let resultadoAmigo = document.createElement("li");
    // resultadoAmigo.textContent = texto;
    // resultadoHTML.appendChild(resultadoAmigo);
    if (AmigosSorteados.includes(nombreResultado)) {
        sortearAmigo(Math.floor(Math.random()*amigos.length),nombreUsuario);
    }else{
        console.log(`El amigo secreto de ${nombreUsuario} es ${nombreResultado}`);
        AmigosSorteados.push(nombreResultado);
        let texto = `Tu amigo secreto es ${nombreResultado}`;
        textoFinal(texto);
        // let resultadoHTML = document.getElementById('resultado');
        // resultadoHTML.innerHTML="";
        // let resultadoAmigo = document.createElement("li");
        // resultadoAmigo.textContent = texto;
        // resultadoHTML.appendChild(resultadoAmigo);
    }
}
function textoFinal(mensaje) {
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML="";
    let resultadoAmigo = document.createElement("li");
    resultadoAmigo.textContent = mensaje;
    resultadoHTML.appendChild(resultadoAmigo);   
}