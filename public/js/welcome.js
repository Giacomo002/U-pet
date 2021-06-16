auth.onAuthStateChanged(function(user){
  if(user){
    console.log("User logged in: ",user);
    location.href = "index.html";
  }else{
    console.log("User logged out");
  }
});
