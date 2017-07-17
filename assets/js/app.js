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
  const currentScroll = window.scrollY;
  if (currentScroll < lastScrollTop) {
      $('nav').removeClass("header-height bg-default'");
      $("#l-me a").removeClass("bg-blue");
  }  if( currentScroll >= 662) {
      $('nav').addClass('bg-default');
      removeList("#l-me a", "#l-skills a", "#l-project a", "#l-contact a");
  } if(currentScroll >= 1563) {
      removeList("#l-skills a", "#l-me a", "#l-project a", "#l-contact a");
  } if (currentScroll >= 2408) {
      removeList("#l-project a", "#l-me a", "#l-skills a", "#l-contact a");
  }if (currentScroll >= 3137) {
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
