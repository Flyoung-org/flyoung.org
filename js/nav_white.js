$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 0) {
	    $("nav").addClass("nav_white", 500);
	  }

	  else{
		  $("nav").removeClass("nav_white", 500);
	  }
  })
})
