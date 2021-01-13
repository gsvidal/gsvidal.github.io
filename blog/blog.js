var topics, text = [];
var info = [[]];
topics = [
  ["Estructura de Datos","Motores de JavaScript","Objetos","Métodos en JavaScript", "Asincronismo"],
  ["Anatomía", "Etiquetas"],
  ["Anatomía", "Arquitectura CSS"]
];
var topicsTitleNames = [
  "topicsTitleJS","topicsTitleHTML", "topicsTitleCSS"
];

const clone = items => items.map(item => (Array.isArray(item) ? clone(item) : item));

var topicsInfo = clone(topics);
var topicsInfoNames = [
  "topicsInfoJS","topicsInfoHTML", "topicsInfoCSS"
];


topicsInfo[0][0] = 
    "At a high level, there are basically three types of data structures. Stacks and Queues are array-like structures that differ only in how items are inserted and removed. Linked Lists, Trees, and Graphs are structures with nodes that keep references to other nodes. Hash Tables depend on hash functions to save and locate data.In terms of complexity, Stacks and Queues are the simplest and can be constructed from Linked Lists. Trees and Graphs are the most complex because they extend the concept of a linked list. Hash Tables need to utilize these data structures to perform reliably. In terms of efficiency, Linked Lists are most optimal for recording and storing of data, while Hash Tables are most performant for searching and retrieving of data.To explain why and illustrate when, this article will conform to the order of these dependencies. Let’s begin! <br>Stack <br>  Arguably the most important Stack in JavaScript is the call stack where we push in the scope of a function whenever we execute it. Programmatically, it’s just an array with two principled operations: push and pop. Push adds elements to the top of the array, while Pop removes them from the same location. In other words, Stacks follow the “Last In, First Out” protocol (LIFO). <br><img class='' src='https://i.imgur.com/TiNKqYN.png' width='30%' height=''></img>";

    topicsInfo[0][1] = 
    "The basic job of a JavaScript engine is to take the JavaScript code that a developer writes and convert it to fast, optimized code that can be interpreted by a";
 
    topicsInfo[1][0] = "fdfsdfsdsfds";

    
//Colocarlo en una matriz de arreglos topicsTitle
for (let i = 0; i < topics.length; i++) {
  text[i] = "<ol>";
  for (let j = 0; j < topics[i].length; j++) {
  text[i] += "<li><a class='atopics atopics"+i+j+"' href = 'javascript:void(0)'>" + topics[i][j] + "</a>" + "<div><p class= 'topicsInfo topicsInfo"+i+j+"'>"  + topicsInfo[i][j] + "</p></div></li>";
  }
  text[i] += "</ol>";
}

// class= 'topicsInfo"+i+j+"'>
for(let i = 0; i < topicsTitleNames.length; i++) {
  document.getElementById(topicsTitleNames[i]).innerHTML = text[i];
}


for (let i = 0; i < topics.length; i++) {
 for (let j = 0; j < topics[i].length; j++) {
  document.querySelector(".atopics" + i + j).addEventListener("click",function () {
    document.querySelector(".topicsInfo" + i + j).classList.toggle("showHide");
    
  })
 }
}

//  console.log(topicsInfo);



