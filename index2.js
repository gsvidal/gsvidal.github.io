
const bodyBGColor = document.getElementById("body");

const switch_button_container = document.getElementById("switch_button_container");

const switch_button = document.getElementById("switch_button");

const logo = document.querySelector(".logo-image");

// const olderProjects = document.query(".older-projects")


var i;
var olderProjects = document.querySelectorAll(".older-projects")

switch_button.addEventListener("click",light_dark_mode);

function light_dark_mode() {
  bodyBGColor.classList.toggle("light-dark-mode") 
  
  switch_button.classList.toggle("light-dark-mode");

  switch_button_container.classList.toggle("light-dark-mode");

  logo.classList.toggle("light-dark-mode");


  for(i=0; i<olderProjects.length; i++){
    olderProjects[i].classList.toggle("light-dark-mode");
  }

}