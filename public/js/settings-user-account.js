var save = document.querySelector("#save");
var cancel = document.querySelector("#cancel");
var delete_btn = document.querySelector("#delete-account");
var upload = document.querySelector("#upload");

function setupAccount(user) {
  cleanAll();
  var name_u = document.querySelector("#name");
  var email_u = document.querySelector("#email");
  var img_u = document.querySelector(".user-account-img");
  name_u.value = user.displayName;
  email_u.value = user.email;
  img_u.src = user.photoURL;
  db.collection("users").doc(user.uid).get().then(function(data) {
    var surname_u = document.querySelector("#surname");
    var birth_u = document.querySelector("#birth");
    var loc_u = document.querySelector("#location");
    var bio_u = document.querySelector("#bio");
    try {
      surname_u.value = data.data().surname;
      birth_u.value = data.data().birth;
      loc_u.value = data.data().location;
      bio_u.value = data.data().bio;
    } catch (e) {
      console.log("Profile not set");
      message("alert", "Complete your profile");
    }
  });
}

function updateAccount(user) {
  cleanAll();
  var name_u = document.querySelector("#name").value;
  var surname_u = document.querySelector("#surname").value;
  var birth_u = document.querySelector("#birth").value;
  var loc_u = document.querySelector("#location").value;
  var email_u = document.querySelector("#email").value;
  var bio_u = document.querySelector("#bio").value;
  user.updateProfile({
    displayName: name_u
    // TODO: photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(function() {
    console.log("Updated profile");
    user.updateEmail(email_u).then(function() {
      console.log("Updated email");
      db.collection("users").doc(user.uid).set({
        surname: surname_u,
        birth: birth_u,
        location: loc_u,
        bio: bio_u
      });
      message("success", "Updated profile");
    });
  });
}
auth.onAuthStateChanged(function(user) {
  if (user) {
    console.log("User logged in: ", user);
    //////////// VISUALIZZO I DATI ///////////
    setupAccount(user);
    /////////// AGGIORNO I DATI MODIFICATI /////////////
    save.addEventListener("click", function() {
      updateAccount(user);
    });
    ////////// RIPRISTINO I DATI /////////////
    cancel.addEventListener("click", function() {
      setupAccount(user);
    });
    ///////// ELIMINO ACCOUNT /////////////
    delete_btn.addEventListener("click", function() {
      var conf=confirm("Are you sure you want to delete your account?");
      if (conf) {
        db.collection("users").doc(user.uid).delete().then(function() {// elimino dati utente
          sto.ref("img/users/profile/" + user.uid).delete().then(function(){//elimino foto profilo
            user.delete().then(function() {// elimino utente
              console.log("Account deleted");
            });
          });
        });
      }
    });
    ////////// UPLOAD FOTO ////////////
    upload.addEventListener("click", function() {
      var change_img = document.querySelector(".user-account-img");
      var img = document.querySelector("#img-file").files[0];
      sto.ref("img/users/profile/" + user.uid).put(img).on("state_changed",
        function(snapshot) {},
        function(error) {
          message("error", error.message);
        },
        function() {
          console.log("Done");
          message("success", "Profile image uploaded");
          sto.ref("img/users/profile/" + user.uid).put(img).snapshot.ref.getDownloadURL().then(function(url) {
            console.log(url);
            user.updateProfile({
              photoURL: url
            }).then(function() {
              console.log("Updated profile");
            });
          });
        });
    });
  } else {
    console.log("User logged out");
    location.href = "../welcome-page.html";
  }
});
