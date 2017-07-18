'use strict';

$(window).load(function() {
		$('.load').fadeOut("slow");
	});


$(document).ready(function(){
  // VER MI MENÚ
  $(".button-collapse").sideNav();
  // EJECUTAR MI MODAL
  $('.modal').modal();
})

let lastScrollTop = 100;
$(window).scroll( function(){
	const me 		= $('#sobre-mi').offset().top;
	const skill = $('#habilidades').offset().top;
	const proj	= $('#proyectos').offset().top;
	const contac = $('#contacto').offset().top;
  const currentScroll = window.scrollY;
  if (currentScroll < lastScrollTop) {
      $('nav').removeClass("header-height bg-default'");
      $("#l-me a").removeClass("bg-blue");
  }  if( currentScroll >= me) {
      $('nav').addClass('bg-default');
      removeList("#l-me a", "#l-skills a", "#l-project a", "#l-contact a");
  } if(currentScroll >= skill) {
      removeList("#l-skills a", "#l-me a", "#l-project a", "#l-contact a");
  } if (currentScroll >= proj) {
      removeList("#l-project a", "#l-me a", "#l-skills a", "#l-contact a");
  }if (currentScroll >= contac) {
      removeList("#l-contact a", "#l-me a", "#l-skills a", "#l-project a");
  }
    lastScrollTop = currentScroll;
});

const removeList = (addList, list1, list2, list3) => {
  $(addList).addClass("bg-blue");
  $(list1).removeClass("bg-blue");
  $(list2).removeClass("bg-blue");
  $(list3).removeClass("bg-blue");
}
