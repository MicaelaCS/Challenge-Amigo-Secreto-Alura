// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let indiceAleatorio = 0;

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if(amigo == ''){
        alert('Necesitas colocar un nombre');
    }else{
        amigos.push(amigo);
        console.log(amigos);
      
     
    }
    
     limpiar();
     ListaAmigos();
}

function limpiar(){
    let limpiarCaja = document.querySelector('#amigo');
    limpiarCaja.value = '';
}


function ListaAmigos(){

    let mostrar = document.querySelector('#listaAmigos');
    mostrar.innerHTML = '';

    for(let i=0; i<amigos.length;i++){
        let li = document.createElement('li');
        li.textContent += amigos[i];
        mostrar.appendChild(li);
    }
}

function sortearAmigo(){

        if(amigos.length == 0){
            alert('No hay amigos en la lista')
        }else{
        indiceAleatorio = Math.floor(Math.random()*amigos.length);
        console.log(indiceAleatorio);

        let nombre = amigos[indiceAleatorio];
        let ganador = document.querySelector('#resultado');
        ganador.innerHTML = `El ganador del amigo secreto es: ${nombre} 🎁`;
        
        amigos = [];
        ListaAmigos();
        }

 }


