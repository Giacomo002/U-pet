auth.onAuthStateChanged(function(user){
  if(user){
    console.log("User logged in: ",user);
    const page_title=document.querySelector("#page_title");
    const user_img=document.querySelector(".user-icon-img");
    page_title.innerText="Hi, "+user.displayName;
    user_img.src=user.photoURL;
  }else{
    console.log("User logged out");
    location.href = "welcome-page.html";
  }
});
