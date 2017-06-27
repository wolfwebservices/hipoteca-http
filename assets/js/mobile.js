var state = false;
function openClose(){
  var listener = document.getElementById("mobile-nav-bar");

  if (!state){
removeClass(listener, "closed")
addClass(listener, "open")

    state = true;
  }else{
    removeClass(listener, "open")
    addClass(listener, "closed")

    state = false;

  }
}
