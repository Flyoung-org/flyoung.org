$(document).ready(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $("nav").addClass("nav_white");
  }

  else{
    $("nav").removeClass("nav_white");
  }
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 0) {
	    $("nav").addClass("nav_white");
	  }

	  else{
		  $("nav").removeClass("nav_white");
	  }
  })
})
