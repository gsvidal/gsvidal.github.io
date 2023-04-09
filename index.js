const bodyBGColor = document.getElementById('body');
const switchButtonContainer = document.querySelector(
  '.switch_button_container'
);
const switchButton = document.querySelector('.switch_button');
const logo = document.querySelector('.logo__bg');
const linkPortfolioReact = document.querySelector('.welcome__portfolio-react');
const personalBlog = document.querySelector('.blog__link');
const olderProjects = document.querySelectorAll('.older-projects');
const olderProjectsImages = document.querySelectorAll('.older-projects-images');
const projectNames = document.querySelectorAll('.project_name');
const sectionsToReveal = document.querySelectorAll('.reveal');
const buttonUp = document.querySelector('.button-up-container');
const certificate = document.querySelector('.certificates');
const certificateSlider = document.querySelector('.certificates__slider');

//Titles changing color when dark-light mode turns
const titles = document.querySelectorAll('.title-projects');

switchButtonContainer.addEventListener('click', lightDarkMode);

// lightDarkMode toggle dark and light mode on each element when is clicked
function lightDarkMode() {
  bodyBGColor.classList.toggle('light-dark-mode');
  switchButton.classList.toggle('light-dark-mode');
  switchButtonContainer.classList.toggle('light-dark-mode');
  logo.classList.toggle('light-dark-mode');
  linkPortfolioReact.classList.toggle('light-dark-mode');
  personalBlog.classList.toggle('light-dark-mode');

  olderProjects.forEach((olderProject) =>
    olderProject.classList.toggle('light-dark-mode')
  );

  olderProjectsImages.forEach((olderProjectsImage) =>
    olderProjectsImage.classList.toggle('light-dark-mode')
  );

  projectNames.forEach((projectName) =>
    projectName.classList.toggle('light-dark-mode')
  );

  titles.forEach((title) => title.classList.toggle('light-dark-mode'));

  certificateSlider.classList.toggle('light-dark-mode');
}

//Web Technologies - Logo Animations
const icons = document.querySelectorAll('.toolbox__icon');

let lastIndex;
function fadeRandomIcon() {
  let randomIconIndex = Math.floor(icons.length * Math.random());
  if (lastIndex === randomIconIndex) {
    randomIconIndex !== icons.length - 1
      ? randomIconIndex++
      : randomIconIndex--;
  }
  icons[lastIndex]?.classList.remove('toolbox__fade');
  icons[randomIconIndex].classList.add('toolbox__fade');
  lastIndex = randomIconIndex;
}

function startAnimation() {
  setInterval(fadeRandomIcon, 1500);
}
setTimeout(startAnimation, 500);

// Project_image animation when hover
const imagesShadow = document.querySelectorAll('.project_image');

imagesShadow.forEach((image) => {
  image.addEventListener('mouseover', (event) => {
    if (!image.parentElement.classList.contains('p-none')) {
      image.parentElement.style.boxShadow =
        '0px 0px 35px 2px #b8a5f2, 0px 0px 15px 2px #ffffff';
    } else {
      image.style.transform = 'none';
    }
  });
  image.addEventListener('mouseout', (event) => {
    if (!image.parentElement.classList.contains('p-none')) {
      image.parentElement.style.boxShadow = 'none';
    }
  });
});

// Live/repo
const images = document.querySelectorAll('.project_image-container');
const githubIcon = document.querySelector('.project__github-image');

images.forEach((image) =>
  image.addEventListener('mouseover', (event) => {
    image?.parentNode.nextElementSibling.classList.add('show');
  })
);

images.forEach((image) =>
  image.addEventListener('mouseout', (event) => {
    image?.parentNode.nextElementSibling.classList.remove('show');
  })
);

const scrollToTop = (event) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

buttonUp.addEventListener('click', scrollToTop);

// Sections to reveal when appear in viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Element is in viewport
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
});

sectionsToReveal.forEach((element) => {
  observer.observe(element);
});

window.addEventListener('scroll', () => {
  var elementTop = certificate.getBoundingClientRect().top;

  if (elementTop < 0) {
    buttonUp.classList.add('revealed');
  } else {
    buttonUp.classList.remove('revealed');
  }
});

certificateSlider.addEventListener('click', lightDarkMode);
