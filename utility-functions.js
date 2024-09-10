function display(message) {
  document.write(message);
}

function output(message) {
  window.outputTag.innerHTML = window.outputTag.innerHTML + message
}

function ask(message) {
   const userText = prompt(message);
   const userNumber = Number(userText);
   const isNotNumber = isNaN(userNumber);
        if (isNotNumber) {
          return userText;
        } else {
          return userNumber;
        }
 }
function converCard(cardObject) {
  let cardString = `<div class="card>"
  <img class="card-img-top" src="${cardObject.src}">
  <div class="card-body>"
  <h3 class="card-title">${cardObject.title}</h3>
  ${}
  `
}