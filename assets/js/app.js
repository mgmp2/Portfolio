'use strict';
$( _ => {
  // VER MI MENÚ
  $(".button-collapse").sideNav();
  // EJECUTAR MI MODAL
  $('.modal').modal();
})


$('.port-imagen').mouseover( (event)=>{
  $(event.currentTarget).children().addClass('visible');
})

$('.port-imagen').mouseout( (event)=>{
  $(event.currentTarget).children().removeClass('visible');
})




// var lastScrollTop = 100;
//
// window.addEventListener("scroll", function(){
//   var currentScroll = window.scrollY;
//   if (currentScroll < 100) {
//   document.getElementById("header").classList.remove("header-height");
// } if (currentScroll > lastScrollTop){
//   document.getElementById("header").classList.add("header-height");
//   document.getElementById("li-portfolio").classList.remove("active");
//
// } if( currentScroll >= 420 && currentScroll < 1160) {
//       document.getElementById("li-portfolio").classList.add("active");
//       document.getElementById("li-about").classList.remove("active");
// } if(currentScroll >= 1160) {
//   document.getElementById("li-about").classList.add("active");
//   document.getElementById("li-portfolio").classList.remove("active");
//   document.getElementById("li-contact").classList.remove("active");
//
// } if (currentScroll >= 1540) {
//   document.getElementById("li-contact").classList.add("active");
//   document.getElementById("li-about").classList.remove("active");
//
// }
//    lastScrollTop = currentScroll;
// });
