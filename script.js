document.querySelector(".myBtn").addEventListener("click", function () {
  changeTextPlayAudioAndShowElementWithDelay();
});

function changeTextPlayAudioAndShowElementWithDelay() {
  let username = document.querySelector(".inPut").value;
  let myTxtElement = document.querySelector(".myTxt");
  myTxtElement.innerHTML = `Cute mo ${username} <3`;
  myTxtElement.style.color = "red";
  myTxtElement.style.fontSize = "2.2rem"; // Change the color to red (you can specify any color here)

  playAudio();
  setTimeout(showHiddenElement, 1600); // Adjust the delay time in milliseconds (1600 milliseconds = 1.6 seconds)
}

function playAudio() {
  let audio = document.querySelector(".sound");
  audio.play();
}

function showHiddenElement() {
  let hiddenElement = document.querySelector(".meme");
  hiddenElement.style.visibility = "visible";
}
