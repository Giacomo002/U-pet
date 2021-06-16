const logout=document.querySelector("#logout");
logout.addEventListener("click",function(e){
  auth.signOut().then(function(){
    console.log("logout");
    location.href="../pages/auth-page.html"
  })
});
