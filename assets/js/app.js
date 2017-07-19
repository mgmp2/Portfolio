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

let lastScrollTop = 200;
$(window).scroll( function(){
	const me 		= $('#sobre-mi').offset().top;
	const skill = $('#habilidades').offset().top -100;
	const proj	= $('#proyectos').offset().top - 50;
	const contac = $('#contacto').offset().top - 400;
  const currentScroll = window.scrollY;
  if (currentScroll < lastScrollTop) {
    $("#l-me a").removeClass("bg-blue");
    $('nav').removeClass("header-height bg-default");
  } if( currentScroll >= me) {
      $('nav').addClass('bg-default');
      removeList("#l-me a", "#l-skills a", "#l-project a", "#l-contact a");
  } if(currentScroll >= skill) {
      removeList("#l-skills a", "#l-me a", "#l-project a", "#l-contact a");
  } if (currentScroll >= proj) {
      removeList("#l-project a", "#l-me a", "#l-skills a", "#l-contact a");
  }if (currentScroll >= contac) {
      removeList("#l-contact a", "#l-me a", "#l-skills a", "#l-project a");
  }
});

const removeList = (addList, list1, list2, list3) => {
  $(addList).addClass("bg-blue");
  $(list1).removeClass("bg-blue");
  $(list2).removeClass("bg-blue");
  $(list3).removeClass("bg-blue");
}
// ANIMATED THE SCROLL FOR MY LIST

$('nav li a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
});
