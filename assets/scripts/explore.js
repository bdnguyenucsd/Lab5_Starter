// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let voiceSelectElement = document.querySelector('select');
  let voiceButtonElement = document.querySelector('button');
  let voiceImageElement = document.getElementById('explore').querySelector('img');

  let synth = window.speechSynthesis;
  let voices = [];

  setTimeout(() => {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  
      if (voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelectElement.appendChild(option);
    }
  }, 50);

  voiceButtonElement.addEventListener('click', (event) => {
    let voiceTextArea = document.querySelector('textarea');
    let voiceSelectedOption = voiceSelectElement.selectedOptions[0].getAttribute('data-name');
    let utterThis = new SpeechSynthesisUtterance(voiceTextArea.value);

    utterThis.addEventListener('start', (event) => {
      voiceImageElement.src = 'assets/images/smiling-open.png'
    })

    utterThis.addEventListener('end', (event) => {
      voiceImageElement.src = 'assets/images/smiling.png'
    })

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name == voiceSelectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis); 
  });


}