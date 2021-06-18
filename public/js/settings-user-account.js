var save=document.querySelector("#save");
var cancel=document.querySelector("#cancel");
var delete_btn=document.querySelector("#delete-account");

function setupAccount(user){
  var name_u=document.querySelector("#name");
  var email_u=document.querySelector("#email");
  name_u.value=user.displayName;
  email_u.value=user.email;
  db.collection("users").doc(user.uid).get().then(function(data){
    var surname_u=document.querySelector("#surname");
    var birth_u=document.querySelector("#birth");
    var loc_u=document.querySelector("#location");
    var bio_u=document.querySelector("#bio");
    surname_u.value=data.data().surname;
    birth_u.value=data.data().birth;
    loc_u.value=data.data().location;
    bio_u.value=data.data().bio;
  });
}
function updateAccount(user){
  var name_u=document.querySelector("#name").value;
  var surname_u=document.querySelector("#surname").value;
  var birth_u=document.querySelector("#birth").value;
  var loc_u=document.querySelector("#location").value;
  var email_u=document.querySelector("#email").value;
  var bio_u=document.querySelector("#bio").value;
  user.updateProfile({
    displayName: name_u
    // TODO: photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(function(){
    console.log("Updated profile");
    user.updateEmail(email_u).then(function(){
      console.log("Updated email");
      db.collection("users").doc(user.uid).set({
        surname: surname_u,
        birth: birth_u,
        location: loc_u,
        bio: bio_u
      });
      message("succes","Updated profile");
    });
  });
}
auth.onAuthStateChanged(function(user){
  if(user){
    console.log("User logged in: ",user);
    //////////// VISUALIZZO I DATI ///////////
    setupAccount(user);
    /////////// AGGIORNO I DATI MODIFICATI /////////////
    save.addEventListener("click",function(){
      updateAccount(user);
    });
    ////////// RIPRISTINO I DATI /////////////
    cancel.addEventListener("click",function(){
      setupAccount(user);
    });
    ///////// ELIMINO ACCOUNT /////////////
    delete_btn.addEventListener("click",function(){
      db.collection("users").doc(user.uid).delete().then(function(){
        user.delete().then(function(){
          console.log("Account deleted");
        });
      });
    });
  }else{
    console.log("User logged out");
    location.href="auth-page.html";
  }
});
