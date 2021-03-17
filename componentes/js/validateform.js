

document.addEventListener("DOMContentLoaded", function(){
  //click -> Puntero se suelta
  //focus -> Cuando un elemento recibe el enfoque del navegador
  //blur -> Cuando un elemento pierde el enfoque
  //change -> Cuando hay un cambio en el contenido (value) de un elemento
  //submit -> FORM cuando se da a una orden submit antes de serializar y enviar

  var emptyTextRegex = /^\s*$/;

  var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

  //Colaborado por Oscar Andrade
  var passRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,32})\S$/;


// 8 caracteres maximo 32, una mayus, un minus, un número, un caracter especial

//

  var formLogin = document.getElementById("formLogin");
  var txtEmail = document.getElementById("txtEmail");
  var txtEmailError = document.getElementById("txtEmailError");
  var txtPassword = document.getElementById("txtPassword");
  var btnLogon = document.getElementById("btnLogon");
  var txtEmailHasErrors = true;
  var txtPasswordHasErrors = true;

  txtEmail.addEventListener("blur", function(e){
    var value = e.target.value;
    if (!emailRegex.test(value)){
      txtEmail.classList.add("error");
      txtEmailError.classList.remove("hidden");
      txtEmailError.innerHTML = "Debe ingresar un correo electrónico válido";
      txtEmailHasErrors = true;
    } else {
      txtEmail.classList.remove("error");
      txtEmailError.classList.add("hidden");
      txtEmailError.innerHTML = "";
      txtEmailHasErrors = false;
    }
    enableBtn();
  });

  txtPassword.addEventListener("blur", function (e) {
    var value = e.target.value;
    if (!passRegex.test(value)) {
      txtPassword.classList.add("error");
      txtPasswordError.classList.remove("hidden");
      txtPasswordError.innerHTML = "Contraseña debe tener al menos una mayúscula, una minúscula, un número y un símbolo especial.";
      txtPasswordHasErrors = true;
    } else {
      txtPassword.classList.remove("error");
      txtPasswordError.classList.add("hidden");
      txtPasswordError.innerHTML = "";
      txtPasswordHasErrors = false;
    }
    enableBtn();
  });

  function enableBtn(){
    if(txtEmailHasErrors || txtPasswordHasErrors){
      btnLogon.setAttribute("disabled", "true");
    } else {
      btnLogon.removeAttribute("disabled");
    }
    
  }
  //Clojure
  //          Fn0           (error                         )
  //          Fn1           (                 ( var  error   ))
  //          Fn2           (                 (           ))

});

// ES5, ES6 ES7
// ()=>{} -> p=>r 
