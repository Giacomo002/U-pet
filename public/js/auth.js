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
  const password_check=signup["password-check-signup"].value;
  if (password==password_check) {
    auth.createUserWithEmailAndPassword(email,password).then(function(cred){
      console.log(cred);
      signup.reset();
      cleanAll();
    }).catch(function(e){
      cleanAll();
      console.log(e.message);
      message("alert",e.message)
    });
  }else {
    message("error","Passwords don't match!");
  }
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
///////////// PASSWORD DIMENTICATA ///////////////
const forgot_password=document.querySelector("#forgot-password");
forgot_password.addEventListener("click",function(){
  const email=login["email-login"].value;
  cleanAll();
  auth.sendPasswordResetEmail(email).then(function(){
    message("succes","Email sent to "+email);
  }).catch(function (e){
    message("error",e.message);
  });
});
