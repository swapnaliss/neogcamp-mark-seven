var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");
var translateButton = document.querySelector("#translate-btn");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(userInput) {
  return serverURL + "?" + "text=" + userInput;
}


function insertOutputToTextArea(translatedText) {
  return (outputText.innerHTML = translatedText);
} 

function clickHandler() {
  var userInput = inputText.value;

  fetch(getTranslationURL(userInput))
    .then((response) => response.json())
    .then((data) => {
      var translatedText = data.contents.translated;
      insertOutputToTextArea(translatedText);
    })
    .catch();
}

translateButton.addEventListener("click", clickHandler);