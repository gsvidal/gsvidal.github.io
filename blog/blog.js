var topics, text = [];
topics = [
  ["Estructura de Datos","Motores de JavaScript","Objetos","Métodos en JavaScript", "Asincronismo"],
  ["Anatomía", "Etiquetas"],
  ["Anatomía", "Arquitectura CSS"]
];
var topicsTitles = [
  "topicsTitleJS","topicsTitleHTML", "topicsTitleCSS"
];

//Colocarlo en una matriz de arreglos topicsTitle
for (let i = 0; i < topics.length; i++) {
  text[i] = "<ol>";
  for (let j = 0; j < topics[i].length; j++) {
  text[i] += "<li><a href = '#'>" + topics[i][j] + "</a></li>";
  }
  text[i] += "</ol>";
}

for(let i = 0; i < topicsTitles.length; i++) {
  document.getElementById(topicsTitles[i]).innerHTML = text[i];
}
