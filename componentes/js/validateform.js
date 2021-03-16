var emptyTextRegex = /^\s*$/;

var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;



document.addEventListener("DOMContentLoaded", function(){
  //click -> Puntero se suelta
  //focus -> Cuando un elemento recibe el enfoque del navegador
  //blur -> Cuando un elemento pierde el enfoque
  //change -> Cuando hay un cambio en el contenido (value) de un elemento
  //submit -> FORM cuando se da a una orden submit antes de serializar y enviar
  var formLogin = document.getElementById("formLogin");
  var txtEmail = document.getElementById("txtEmail");
  var txtEmailError = document.getElementById("txtEmailError");
  var txtPassword = document.getElementById("txtPassword");
  
  txtEmail.addEventListener("blur", function(e){
    var value = e.target.value;
    if (!emailRegex.test(value)){
      txtEmail.classList.add("error");
      txtEmailError.classList.remove("hidden");
      txtEmailError.innerHTML = "Debe ingresar un correo electrónico válido";
    } else {
      txtEmail.classList.remove("error");
      txtEmailError.classList.add("hidden");
      txtEmailError.innerHTML = "";
    }
  });


});

// ES5, ES6 ES7
// ()=>{} -> p=>r 
