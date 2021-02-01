const topicsTitle = document.querySelectorAll(".topics-title-ready");
const topicsInfo = document.querySelectorAll(".topics-info");

for(let i = 0; i < topicsTitle.length; i++){
  topicsTitle[i].addEventListener("click", function () {
  topicsInfo[i].classList.toggle("showHide");
  });
}