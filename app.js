let listaAmigos = [];
let amigoSecreto;
let listaNombresAsignados = [];


function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (nombre !== "" && !listaAmigos.includes(nombre)) {
        listaAmigos.push(nombre);
        actualizarLista();
        inputAmigo.value = "";
    } else {
        alert("Ingrese al menos un nombre y que no esté repetido en su lista de amigos")
    }
}

function actualizarLista() {
    let ulLista = document.getElementById("listaAmigos");
    ulLista.innerHTML = "";
    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent=amigo;
        ulLista.appendChild(li);
    });
    document.getElementById('sortear').removeAttribute('disabled');
}

function sortearAmigo(){
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()*listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAleatorio];
    let ulResultado = document.getElementById("resultado");
    //ulResultado.innerHTML = "";
    let li = document.createElement("li");
    li.textContent=`El amigo secreto es: ${amigoSecreto}`;
    ulResultado.appendChild(li);
    document.querySelector('#sortear').setAttribute('disabled','true')
    condicionesIniciales();
    
}

function condicionesIniciales() {
    let ulLista = document.getElementById("listaAmigos");
    ulLista.innerHTML = "";
    listaAmigos = [];
    

}

function asignarTextoElemento(elemento, texto) {
    let resultado = document.querySelector(elemento); //para usar la etiqueta h1 como variable
    resultado.innerHTML = texto;
    return;
}

function limpiarCampo() {
    let valorCampo = document.querySelector('#amigo').value=''; //el # se usa para que el querySelector busque por ID
}

