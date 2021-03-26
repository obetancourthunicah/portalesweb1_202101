document.addEventListener("DOMContentLoaded", function(){
  var modalBackground = null;
  var modal = null;
  var modalClose = null;
  var modalContainer = null;
  var _self = this;
  function initModal()
  {
    var htmlModalStructure  = [];
    htmlModalStructure.push('<section class="modalBackground modalhidden" id="modalBackground">');
    htmlModalStructure.push('<section class="modal" id="modalBody">');
    htmlModalStructure.push('<section class="modalContainer" id="modalContainer"></section>');
    htmlModalStructure.push('<section class="modalClose" id="modalClose">X');
    htmlModalStructure.push('</section>');
    htmlModalStructure.push('</section>');
    htmlModalStructure.push('</section>');
    var bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.insertAdjacentHTML('beforeend', htmlModalStructure.join(""));
    //Manejadores
    modalBackground = document.getElementById('modalBackground');
    modal = document.getElementById('modalBody');
    modalClose = document.getElementById('modalClose');
    modalContainer = document.getElementById('modalContainer');

    modalClose.addEventListener("click", modalCloseHandler);
    document.addEventListener("keyup", function (e) { if (e.key =="Escape"){modalCloseHandler(e);}});
    window.showModal = modalOpen;
  }

  function modalCloseHandler(e){
    e.preventDefault();
    e.stopPropagation();
    modalContainer.innerHTML="";
    modalBackground.classList.add("modalhidden");
  }

  function modalOpen(urlOrId = "", type = "iframe", width = 640, height=480) {
    console.log(modal);
    modal.style.width = width + "px";
    modal.style.height = height + "px";
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    modal.style.top = ((vh - height) / 2) + "px";
    modal.style.left = ((vw - width) / 2) + "px";
    htmlContainer="";
    if (type=="iframe"){
      htmlContainer = '<iframe width="' + (width-32) + 'px" height="' + (height-32) + 'px" src="'+urlOrId+'"></iframe>' ;
    } else {
      var srcElement = document.getElementById(urlOrId);
      htmlContainer = srcElement.innerHTML;
    }
    modalContainer.innerHTML = htmlContainer;
    modalBackground.classList.remove("modalhidden");
  }

  initModal();
});
