window.onscroll = nav_white;
function nav_white() {
  if (document.body.scrollTop > window.screen.height) {
    document.querySelector(nav).className = ".nav_white";
  }
}
