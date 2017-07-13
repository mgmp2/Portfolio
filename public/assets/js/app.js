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


let lastScrollTop = 100;

window.addEventListener("scroll", function(){
  const currentScroll = window.scrollY;
  if (currentScroll < 100) {
    $('nav').removeClass("header-height");
    $("#l-me").removeClass("bg-blue");
} if (currentScroll > lastScrollTop){
    $('nav').addClass("header-height");
} if( currentScroll >= 797) {
    removeList("#l-me", "#l-skills", "#l-project", "#l-contact");
} if(currentScroll >= 1721) {
  removeList("#l-skills", "#l-me", "#l-project", "#l-contact");

} if (currentScroll >= 2479) {
  removeList("#l-project", "#l-me", "#l-skills", "#l-contact");
}if (currentScroll >= 3068) {
  removeList("#l-contact", "#l-me", "#l-skills", "#l-project");
}
    lastScrollTop = currentScroll;
});

const removeList = (addList, list1, list2, list3) => {
  $(addList).addClass("bg-blue");
  $(list1).removeClass("bg-blue");
  $(list2).removeClass("bg-blue");
  $(list3).removeClass("bg-blue");
}
