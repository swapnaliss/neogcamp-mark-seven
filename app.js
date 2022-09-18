var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");
var translateButton = document.querySelector("#translate-btn");

var serverURL = "https://api.funtranslations.com/translate/minion.json";


function clickHandler() {
  var userInput = inputText.value;

  fetch(serverURL + "?" + "text =" + userInput )
    .then((response) => response.json())
    .then((data) => {
      var translatedText = data.contents.translated;
      outputText.innerHTML = translatedText;;
    })
    .catch();
}

translateButton.addEventListener("click", clickHandler);