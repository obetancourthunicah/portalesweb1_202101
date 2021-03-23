// JSON javascript object notation

// var objJSON = {
//     "nombre":"Orlando J Betancourth",
//     "telefono":"+504999999",
//     "correo":"obetancourthunicah@gmail.com",
//     "direccion":"Alguna Colonia de Tegucigalpa MDC, Honduras"
// };


// Vamos a extraer la informacion de un archiv json

document.addEventListener("DOMContentLoaded", function(){
  var cardsFromFile = [];
  var vholders = document.getElementsByClassName("vholders")[0];
  function createCards(){
    var htmlBuffer = cardsFromFile.map(
      function(currentItem, indexOfItem){
        return `<div><h2>${currentItem.nombre}</h2>
                <div class="correo">${currentItem.correo}</div>
                <div class="telefono">${currentItem.telefono}</div>
                <div class="direccion">${currentItem.direccion}</div>
            </div>`;
      }
    );
    vholders.innerHTML = htmlBuffer.join("");
  }
  fetch("js/vcards.json")
    .then(
      function(response){
        return response.json();
      }
    )
    .then( function(jsonData){
      cardsFromFile = jsonData;
      createCards();
    })
    .catch(
      function(err){
        console.log(err);
      }
    )
});
