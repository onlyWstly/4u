const jsConfetti = new JSConfetti();

document.querySelector(".myBtn").addEventListener("click", function () {
  changeTextPlayAudioAndShowElementWithDelay()
    .then(triggerConfetti)
    .catch((error) => console.error(error));
});

function changeTextPlayAudioAndShowElementWithDelay() {
  return new Promise((resolve, reject) => {
    try {
      let username = document.querySelector(".inPut").value;
      let myTxtElement = document.querySelector(".myTxt");
      myTxtElement.innerHTML = `Cute mo ${username} <3`;
      myTxtElement.style.color = "red";

      playAudio();

      setTimeout(() => {
        showHiddenElement();
        resolve(); // Resolve the promise after the delay
      }, 1600); // Adjust the delay time in milliseconds (1600 milliseconds = 1.6 seconds)
    } catch (error) {
      reject(error); // Reject the promise if an error occurs
    }
  });
}

function playAudio() {
  let audio = document.querySelector(".sound");
  audio.play();
}

function showHiddenElement() {
  let hiddenElement = document.querySelector(".meme");
  hiddenElement.style.visibility = "visible";
}

function triggerConfetti() {
  return new Promise((resolve, reject) => {
    try {
      jsConfetti.addConfetti();
      resolve(); 
    } catch (error) {
      reject(error);
    }
  });
}
