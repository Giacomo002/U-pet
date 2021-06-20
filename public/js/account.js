auth.onAuthStateChanged(function(user){
  if(user){
    console.log("User logged in: ",user);
    db.collection("users").doc(user.uid).get().then(function(data){
      const user_name=document.querySelector("#user-name");
      const user_img=document.querySelector(".user-account-img");
      user_name.innerText=user.displayName+" "+data.data().surname;
      user_img.src=user.photoURL;
    });
  }else{
    console.log("User logged out");
    location.href = "../welcome-page.html";
  }
});
