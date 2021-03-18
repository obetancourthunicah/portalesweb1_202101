document.addEventListener("DOMContentLoaded", function(){

  var slider = document.getElementsByClassName("slider")[0];
  var slideTrail = document.getElementsByClassName("slideTrail")[0];
  var slideFrames = document.getElementsByClassName("slideFrame");
  var imagesToLoad = document.querySelectorAll("[data-srcset], [data-src]");

  console.log(slideFrames.length);
  console.log(imagesToLoad);
});
