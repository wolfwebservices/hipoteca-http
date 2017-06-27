var state = false;
function openClose(){
  var listener = document.getElementById("mobile-nav-bar");
  if (!state){
    listener.style.display = "block";
    listener.style.height = "auto";

    state = true;
  }else{
    listener.style.height = "0px"
    listener.style.display = "none";
    state = false;
  }
}
