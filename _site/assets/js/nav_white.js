$(document).ready(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $("nav").addClass("nav_white");
    $('.logo').attr('src','/assets/img/svg/logo.svg');
  }

  else{
    $("nav").removeClass("nav_white");
    $('.logo').attr('src','/assets/img/svg/logo_white.svg');
  }
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 0) {
	    $("nav").addClass("nav_white");
      $('.logo').attr('src','/assets/img/svg/logo.svg');
	  }

	  else{
		  $("nav").removeClass("nav_white");
      $('.logo').attr('src','/assets/img/svg/logo_white.svg');
	  }
  })
})
