if ("serviceWorker" in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register("/public/sw.js").then(registration => {
        console.log("SW Registred!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    });
  });
}
