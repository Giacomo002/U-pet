for (var i = 0; i < document.querySelectorAll(".animal-card").length; i++) {
  document.getElementsByClassName("animal-card")[i].addEventListener("click", function() {
    for (var i = 0; i < document.querySelectorAll(".animal-card").length; i++){
      document.getElementsByClassName("animal-card")[i].style.filter="contrast(0.6)";
    }
    this.style.filter="contrast(1)";
  });
}
