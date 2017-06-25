function inicio() {
if ( window.history && window.history.pushState ) {
      window.history.pushState('', '', window.location.pathname)
      //console.log("1");
      getRoute("/inicio")
  } else {
      window.location.href = window.location.href.replace(/#.*$/, '#');
      //console.log("2");
      //  history.pushState('', document.title, window.location.pathname);
      //  getRoute("/inicio");
}}
