const topicsTitle = document.querySelectorAll(".topics-title");
const topicsInfo = document.querySelectorAll(".topics-info");

for(let i = 0; i < topicsTitle.length; i++){
  topicsTitle[i].addEventListener("click", function () {
  if(topicsTitle[i].classList.contains("topics-title-ready")) {
    topicsInfo[i].classList.toggle("showHide");
  }
  });
}

console.log(topicsTitle);
console.log(topicsTitleR);