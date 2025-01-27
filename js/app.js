let amigos = [];
function adicionar(){
   let amigo = document.getElementById("nome-amigo");
   let lista = document.getElementById("lista-amigos");
   
 amigos.push(amigo.value);
  if (lista.textContent == '') {
    lista.textContent = amigo.value;
   } else if (amigo.value == '' || amigo.value == ' '){
    alert("Digite algo para adicionar a lista!");
  }else{
    lista.textContent = lista.textContent + ' , ' + amigo.value;
  }
  amigo.value = '';
}



  function sortear() {
embaralha(amigos);
let sorteio = document.getElementById("lista-sorteio");
if (amigos.length == 1 ) {
}else{
for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
    }
}
}

}



  function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar(){
    let lista = document.getElementById("lista-amigos");
lista.innerHTML = "";
let listaSorteio = document.getElementById("lista-sorteio");
listaSorteio.innerHTML = "";
amigos = []
}