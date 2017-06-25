//_________Hash change router start ______________
window.onhashchange = router;

function router(){
    if (window.location.hash) {
    check();
    getRoute(window.location.href.split("#/")[1]);
  }else{
    buttons_color("inicio");
        getRoute("/inicio");
  }
buttons_color(window.location.href.split("#/")[1]);
}



//___________Check if the hash doesnt exists___________
function check(){
if (window.location.hash !== "#/calculadora" ||
  window.location.hash !== "#/acerca" ||
  window.location.hash !== "#/contacto" ||
  window.location.hash !== ""
) {
window.location.hash == "#/404"
}
}
//___________End of Check if the hash doesnt exists___________




//___________Start of XMLHttpRequest__________________________

var request;
function getRoute(hashName){
var url="/partials/" + hashName + ".html";

if(window.XMLHttpRequest){
request=new XMLHttpRequest();
}
else if(window.ActiveXObject){ //IE fallback
request=new ActiveXObject("Microsoft.XMLHTTP");
}

try{
request.onreadystatechange=sendRoute;
request.open("GET",url,true);
request.send();
}
catch(e){
alert("Unable to connect to server");
}
}
//Inserting html
function sendRoute(){
if(request.readyState==4){
if(request.status === 200){
  //check if "OK" (200) //success
} else {
location.hash = '#/404' //otherwise, some other code was returned
}
var val=request.responseText;
document.getElementById('views').innerHTML=val;
}
}

//___________End of XMLHttpRequest__________________________
