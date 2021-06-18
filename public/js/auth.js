auth.onAuthStateChanged(function(user){
  if(user){
    console.log("User logged in: ",user);
    location.href = "../index.html";
  }else{
    console.log("User logged out");
  }
});
//////////// SIGNUP////////////
const signup=document.querySelector("#signup");
signup.addEventListener("submit",function(e){
  e.preventDefault();
  const email=signup["email-signup"].value;
  const password=signup["password-signup"].value;
  auth.createUserWithEmailAndPassword(email,password).then(function(cred){
    console.log(cred);
    signup.reset();
    cleanAll();
  }).catch(function(e){
    cleanAll();
    console.log(e.message);
    message("alert",e.message)
  });
});
//////////// LOGIN////////////
const login=document.querySelector("#login");
login.addEventListener("submit",function(e){
  e.preventDefault();
  const email=login["email-login"].value;
  const password=login["password-login"].value;
  auth.signInWithEmailAndPassword(email,password).then(function(cred){
    console.log(cred);
    login.reset();
    cleanAll();
  }).catch(function(e){
    cleanAll();
    console.log(e.message);
    message("error",e.message)
  });
});
