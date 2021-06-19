auth.onAuthStateChanged(function(user){
  if(user){
    console.log("User logged in: ",user);
    db.collection("users").doc(user.uid).get().then(function(data){
      const user_name=document.querySelector("#user-name");
      user_name.innerText=user.displayName+" "+data.data().surname;
    });
  }else{
    console.log("User logged out");
    location.href = "../welcome-page.html";
  }
});
