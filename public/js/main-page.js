auth.onAuthStateChanged(function(user){
  if(user){
    console.log("User logged in: ",user);
    const page_title=document.querySelector("#page_title");
    page_title.innerText="Hi, "+user.displayName;
  }else{
    console.log("User logged out");
    location.href = "welcome-page.html";
  }
});
