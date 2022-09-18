var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");
var translateButton = document.querySelector("#translate-btn");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

translateButton.addEventListener("click", clickHandler);