// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelectElement = document.getElementById('horn-select');
  const hornAudioElement = document.getElementById('volume');
  const hornButtonElement = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  hornButtonElement.addEventListener('click', (event) => {
    let audio = document.getElementById('expose').querySelector('audio');

    if (hornSelectElement.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
    audio.play();
  });

  hornSelectElement.addEventListener('change', (event) => {
    let image = document.getElementById('expose').querySelector('img');
    let audio = document.getElementById('expose').querySelector('audio');

    if (hornSelectElement.value == 'air-horn') {
      image.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    } else if (hornSelectElement.value == 'car-horn') {
      image.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    } else if (hornSelectElement.value == 'party-horn') {
      image.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  hornAudioElement.addEventListener('input', (event) => { 
    let image = document.getElementById('volume-controls').querySelector('img');
    let audio = document.getElementById('expose').querySelector('audio');

    audio.volume = hornAudioElement.value / 100;

    if (hornAudioElement.value == 0) {
      image.src = 'assets/icons/volume-level-0.svg';
    } else if (hornAudioElement.value >= 1 && hornAudioElement.value < 33) {
      image.src = 'assets/icons/volume-level-1.svg';
    } else if (hornAudioElement.value >= 33 && hornAudioElement.value < 67) {
      image.src = 'assets/icons/volume-level-2.svg';
    } else {
      image.src = 'assets/icons/volume-level-3.svg';
    }
  });
}