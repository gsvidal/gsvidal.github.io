const bodyBGColor = document.getElementById("body");
const switchButtonContainer = document.querySelector(
  ".switch_button_container"
);
const switchButton = document.querySelector(".switch_button");
const logo = document.querySelector(".logo__bg");
const personalBlog = document.querySelector(".blog__link");
const olderProjects = document.querySelectorAll(".older-projects");
const olderProjectsImages = document.querySelectorAll(".older-projects-images");
const projectNames = document.querySelectorAll(".project_name");
const sectionsToReveal = document.querySelectorAll(".reveal");
const buttonUp = document.querySelector(".button-up-container");
const certificate = document.querySelector(".certificates");
const certificateSlider = document.querySelector(".certificates__slider");
const toolbox = document.querySelector(".toolbox");
const navItems = document.querySelectorAll(".nav-bar__item");
const hoverElement = document.querySelector(".hover-me");
const switchButtonText = document.querySelector(".switch_button-text");

// Logo has a 3d hover effect
const height = logo.clientHeight;
const width = logo.clientWidth;

logo.addEventListener("mousemove", (event) => {
  const { layerX, layerY } = event;

  const yRotation = ((layerX - width / 2) / width) * 15;

  const xRotation = ((layerY - height / 2) / height) * 15;

  const string = `
    perspective(400px)
    scale(1)
    rotateX(${xRotation}deg)
    rotatey(${yRotation}deg)
  `;

  logo.style.transform = string;
});

logo.addEventListener("mouseout", (event) => {
  const string2 = `
    perspective(400px)
    scale(1)
    rotateX(0)
    rotatey(0)
  `;

  logo.style.transform = string2;
});

//Titles changing color when dark-light mode turns
// console.log(titles)

switchButtonContainer.addEventListener("click", lightDarkMode);

// lightDarkMode toggle dark and light mode on each element when is clicked
let [red, green, blue] = [69, 11, 178];
let isDarkMode = true;

function lightDarkMode() {
  const titles = document.querySelectorAll(".title-projects");
  isDarkMode = !isDarkMode;
  bodyBGColor.classList.toggle("light-dark-mode", !isDarkMode);
  updateBackgroundColor();

  switchButtonContainer.classList.toggle("light-dark-mode");
  switchButton.classList.toggle("light-dark-mode");
  switchButtonText.classList.toggle("light-dark-mode");
  if (switchButton.classList.contains("light-dark-mode")) {
    switchButtonText.textContent = "OFF";
  } else {
    switchButtonText.textContent = "ON";
  }
  logo.classList.toggle("light-dark-mode");
  // personalBlog.classList.toggle("light-dark-mode");

  olderProjects.forEach((olderProject) =>
    olderProject.classList.toggle("light-dark-mode")
  );

  olderProjectsImages.forEach((olderProjectsImage) =>
    olderProjectsImage.classList.toggle("light-dark-mode")
  );

  projectNames.forEach((projectName) =>
    projectName.classList.toggle("light-dark-mode")
  );

  titles.forEach((title) => title.classList.toggle("light-dark-mode"));

  navItems.forEach((navItem) => navItem.classList.toggle("light-dark-mode"));

  console.log("dark");

  // certificateSlider.classList.toggle('light-dark-mode');
}

//Web Technologies - Logo Animations
const icons = document.querySelectorAll(".toolbox__icon");

let lastIndex;
function fadeRandomIcon() {
  let randomIconIndex = Math.floor(icons.length * Math.random());
  if (lastIndex === randomIconIndex) {
    randomIconIndex !== icons.length - 1
      ? randomIconIndex++
      : randomIconIndex--;
  }
  icons[lastIndex]?.classList.remove("toolbox__fade");
  icons[randomIconIndex].classList.add("toolbox__fade");
  lastIndex = randomIconIndex;
}

function startAnimation() {
  setInterval(fadeRandomIcon, 1500);
}
setTimeout(startAnimation, 500);

// Project_image animation when hover
const imagesShadow = document.querySelectorAll(".project_image");

imagesShadow.forEach((image) => {
  image.addEventListener("mouseover", (event) => {
    if (!image.parentElement.classList.contains("p-none")) {
      image.parentElement.style.boxShadow =
        "0px 0px 35px 2px #b8a5f2, 0px 0px 15px 2px #ffffff";
    } else {
      image.style.transform = "none";
    }
  });
  image.addEventListener("mouseout", (event) => {
    if (!image.parentElement.classList.contains("p-none")) {
      image.parentElement.style.boxShadow = "none";
    }
  });
});

// Live/repo
const images = document.querySelectorAll(".project_image-container");
const githubIcon = document.querySelector(".project__github-image");

images.forEach((image) =>
  image.addEventListener("mouseover", (event) => {
    image?.parentNode?.nextElementSibling?.classList.add("show");
  })
);

images.forEach((image) =>
  image.addEventListener("mouseout", (event) => {
    image?.parentNode?.nextElementSibling?.classList.remove("show");
  })
);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

buttonUp.addEventListener("click", scrollToTop);

// Sections to reveal when appear in viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Element is in viewport
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
});

sectionsToReveal.forEach((element) => {
  observer.observe(element);
});

window.addEventListener("scroll", () => {
  var elementTop = certificate.getBoundingClientRect().top;

  if (elementTop < 0) {
    buttonUp.classList.add("revealed");
  } else {
    buttonUp.classList.remove("revealed");
  }
});

const mediaQuery = window.matchMedia("(min-width: 1280px)");

function handleViewportChange(event) {
  if (event.matches) {
    toolbox.classList.remove("reveal");
  } else {
    toolbox.classList.add("reveal");
  }
}

mediaQuery.addListener(handleViewportChange);

// Make background smoothly change color from main color to black
function updateBackgroundColor() {
  const y = 1 + (window.scrollY || window.pageYOffset) / 2000;
  [red, green, blue] = isDarkMode ? [69, 11, 178] : [255, 255, 255];
  const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
  bodyBGColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

window.addEventListener("scroll", () => {
  updateBackgroundColor();
});

// Initial call to set the correct background color when the page loads
updateBackgroundColor();

const hideHoverMe = () => {
  setTimeout(() => {
    hoverElement.classList.add("hide");
  }, 1000);
};

projectNames.forEach((project) =>
  project.addEventListener("mouseover", hideHoverMe)
);
