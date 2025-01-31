// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let AmigosSorteados = [];
let relacionAmigos =[];
let listaUsuarios = [];
let amigosRestantes = [];
let usuarioFinal = [];


function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;

    if(nombreDeAmigo === null || nombreDeAmigo.trim() ===""){
        alert ("Por favor, inserte un nombre.");
    } else {
        if (amigos.includes(nombreDeAmigo)){
            alert(`${nombreDeAmigo} ya está incluido en la lista de amigos`);
            limpiarCaja();
            return
        }else {
            amigos.push(nombreDeAmigo);
            // Función para eliminar elementos
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
    //limpiarListaAmigos();
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
    //Desactivar botón de agregar amigo
    document.querySelector('.button-add').setAttribute('disabled','true');
    if (AmigosSorteados.length === cantidadAmigos) {
        textoFinal('Ya no hay amigos disponibles');
        document.querySelector('.button-draw').setAttribute('disabled','true');
    } else {
        // let cantidadAmigos = amigos.length;
        //console.log(cantidadAmigos);
        let numeroAzar = Math.floor(Math.random()*cantidadAmigos);
        //console.log(numeroAzar);
        let nombreUsuario = prompt('¿Cómo te llamas?');
        if (amigos.includes(nombreUsuario)) {
            asignarAmigo(numeroAzar,nombreUsuario);
            //29 ene 25 se ingresa nombre de usuario a arreglo
            listaUsuarios.push(nombreUsuario);
        } else {
            alert(`Hola ${nombreUsuario}. No estás incluido entre los amigos`)
        }
    }
    
}
function asignarAmigo(i,nombreUsuario) {
    let nombreResultado = amigos[i];
    //console.log(nombreResultado);
        if (nombreUsuario == nombreResultado || AmigosSorteados.includes(nombreResultado)) {
            asignarAmigo(Math.floor(Math.random() * amigos.length), nombreUsuario);
            //29 ene 25 se agrega sentencia else if
        } else if (amigos.length - AmigosSorteados.length === 2) {
            //console.log('Sólo quedan dos amigos');
            //console.log(`el nombre resultado es ${nombreResultado}`);
            
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
            
        } else{
            relacionAmigos.push(nombreResultado);
            relacionAmigos.push(nombreUsuario);
            resultado(nombreResultado,nombreUsuario);
        }
}

function resultado(nombreResultado,nombreUsuario) {
    if (AmigosSorteados.includes(nombreResultado)) {
        asignarAmigo(Math.floor(Math.random()*amigos.length),nombreUsuario);
    }else{
        console.log(`El amigo secreto de ${nombreUsuario} es ${nombreResultado}`);
        AmigosSorteados.push(nombreResultado);
        let texto = `Tu amigo secreto es ${nombreResultado}`;
        textoFinal(texto);
    }
}
function textoFinal(mensaje) {
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML="";
    let resultadoAmigo = document.createElement("li");
    resultadoAmigo.textContent = mensaje;
    resultadoHTML.appendChild(resultadoAmigo);
    aceptarMensaje(); 
}
function aceptarMensaje(){
    document.getElementById('resultado').classList.remove('Aceptar');
    document.querySelector('#Boton-aceptar').classList.add('Aceptar-mostrado');
    document.querySelector('#Boton-aceptar').classList.remove('Aceptar');
}
function ocultarMensaje() {
    document.querySelector('#resultado').classList.add('Aceptar');
    document.querySelector('#Boton-aceptar').classList.add('Aceptar');
    document.querySelector('#Boton-aceptar').classList.remove('Aceptar-mostrado');
}