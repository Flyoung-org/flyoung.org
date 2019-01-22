function add_nav_white() {
  $("nav").addClass("nav_white");
  $('.logo').attr('src','/assets/img/svg/logo.svg');
}
function rm_nav_white() {
  $("nav").removeClass("nav_white");
  $('.logo').attr('src','/assets/img/svg/logo_white.svg');
}

$(document).ready(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    add_nav_white();
  }
  else{
    rm_nav_white();
  }
  console.log("pre");
})

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    add_nav_white();
  }
  else{
    rm_nav_white();
  }
})
console.log("hello");
console.log("abc");