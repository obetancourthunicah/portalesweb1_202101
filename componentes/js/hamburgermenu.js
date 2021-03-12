/* 
1. Al cargarse todo el dom, registrar un listener (observador) al evento
click del nodo de la hamburguesa.

2. Al hacer el click en la hamburguesa esconder o mostrar el nodo nav

3. Cuando este en modo de media tableta o escritorio siempre mostrar el nav.

DOM  -- Documento Object Model  : Representación en memoria de la página en el
navegador.
*/

/*
document.addEventListener("DOMContentLoaded", function(e){

});
*/


document.addEventListener("DOMContentLoaded", page_loaded);

function page_loaded(e){
  //var hmbbtn = document.getElementsByClassName("hamburguerMenu")[0];
  var hmbbtn = document.getElementById("hmbbtn");
  hmbbtn.addEventListener("click", hmbbtn_onclick);
  /*
  document.getElementsByTagName("header")[0].addEventListener("click", hmbbtn_onclick);
  document.getElementsByTagName("body")[0].addEventListener("click", hmbbtn_onclick);
  */
}

function hmbbtn_onclick(e){
  e.preventDefault();
  e.stopPropagation();
  var menu = document.getElementById("menu");
  menu.classList.toggle("hidden"); //Es un switch, si la clase esta declara en
  // el nodo, la quita. Si no esta declarada en el nodo, la agrega.
}
