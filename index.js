const bodyBGColor = document.getElementById("body");
const switchButtonContainer = document.getElementById("switch_button_container");
const switchButton = document.getElementById("switch_button");
const logo = document.querySelector(".logo-image");
const logoAnim = document.querySelector(".logo-image-animacion");
const linkPortfolioReact = document.querySelector(".bienvenida__portfolio-react");

const olderProjects = document.querySelectorAll(".older-projects")
const olderProjectsImages = document.querySelectorAll(".older-projects-images")
const pName = document.querySelectorAll(".project_name")

switchButtonContainer.addEventListener("click",lightDarkMode);

function lightDarkMode() {
  bodyBGColor.classList.toggle("light-dark-mode"); 
  switchButton.classList.toggle("light-dark-mode");
  switchButtonContainer.classList.toggle("light-dark-mode");
  logo.classList.toggle("light-dark-mode");
  logoAnim.classList.toggle("light-dark-mode");
  linkPortfolioReact.classList.toggle("light-dark-mode");

  for(let i=0; i<olderProjects.length; i++){
    olderProjects[i].classList.toggle("light-dark-mode");
  }

  for(let i=0; i<olderProjectsImages.length; i++){
    olderProjectsImages[i].classList.toggle("light-dark-mode");
  }

  for(let i=0; i<pName.length; i++){
    pName[i].classList.toggle("light-dark-mode");
  }
}

//Web technologies icons animation
const icons = document.querySelectorAll(".toolbox__icon");

let lastIndex;
function fadeRandomIcon() {
  let randomIconIndex = Math.floor(icons.length*Math.random());
  if(lastIndex === randomIconIndex) {
    randomIconIndex++;
  }
    icons[lastIndex]?.classList.remove("toolbox__fade");
    icons[randomIconIndex].classList.add("toolbox__fade");
    lastIndex = randomIconIndex;
}

function startAnimation() {
  setInterval(fadeRandomIcon,2000)
}

setTimeout(startAnimation, 1000)

