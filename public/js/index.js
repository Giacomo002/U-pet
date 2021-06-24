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
// enable offline data
db.enablePersistence()
  .catch(function(err) {
    if (err.code == 'failed-precondition') {
      // probably multible tabs open at once
      console.log('persistance failed');
    } else if (err.code == 'unimplemented') {
      // lack of browser support for the feature
      console.log('persistance not available');
    }
  });
