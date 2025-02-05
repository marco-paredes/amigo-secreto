let listaAmigos = [];
let amigoSecreto;

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
}

function sortearAmigo(){
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()*listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAleatorio];
    let ulResultado = document.getElementById("resultado");  
    let li = document.createElement("li");
    if (li.textContent=true) {
        ulResultado.innerHTML = "";
    }
    li.textContent=`El amigo secreto sorteado es: ${amigoSecreto}`;
    ulResultado.appendChild(li);
    listaAmigos = [];
    condicionesIniciales();
    actualizarLista();
    
}

function condicionesIniciales() {
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function reiniciar() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    document.querySelector('#reiniciar');  
}
