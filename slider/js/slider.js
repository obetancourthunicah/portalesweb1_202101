document.addEventListener("DOMContentLoaded", function(){

  var slider = document.getElementsByClassName("slider")[0];
  var slideTrail = document.getElementsByClassName("slideTrail")[0];
  var slideFrames = document.getElementsByClassName("slideFrame");
  var imagesToLoad = document.querySelectorAll("[data-srcset], [data-src]");
  var currentSlideIndex = 0;
  var timerRef = null;
  var direction = 1;

  // Lazy Loading de las imagenes
  // data-variable    html permite agrega atributos custom, 
  // acceder por medio de un objeto dataset
  var loading = 0;
  for(var i = 0; i < imagesToLoad.length ; i++) {
    var currentImage = imagesToLoad[i];
    var isSrc = false;
    if( 'srcset' in currentImage.dataset){
      currentImage.srcset = currentImage.dataset.srcset;
    }
    if( 'src' in currentImage.dataset){
      currentImage.addEventListener('load', function(e){
        loading -= 1;
        if (loading == 0){
          //iniciamos la animación del slider
          console.log("Animar el slider");
          initSlider();
        }
      });
      loading += 1;
      currentImage.src = currentImage.dataset.src;
    }
  }
  function initSlider(){
    slideTrail.style.width = (slideFrames.length * 100) + "vw";
    tick();
  }
  function tick(){
    timerRef = setTimeout(
      function(){
        if (direction == 1 && currentSlideIndex == (slideFrames.length - 1)) {
          direction = -1;
        }
        if (direction == -1 && currentSlideIndex == 0) {
          direction = 1;
        }
        var nextSlide = currentSlideIndex + direction;
        // Mover el slide
        moveSliderTo(nextSlide);
        tick();
      },
      5000
    );
  }

  function moveSliderTo(slideTo) {
    slideTrail.style.left = (slideTo * -100) + "vw";
    currentSlideIndex = slideTo;
  }
});


// clearTimeout(timerRef)
// var divPoint = document.createElement("DIV");
// divPoint.className="pointer";
// divPoint.dataset.slideIndex = 1;
// divPoint.addEventListener("click", function(e){})
