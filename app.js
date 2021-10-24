const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const image = document.querySelector('.piano');
let darkMode = localStorage.getItem('#toggleDark');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');
console.log(darkMode);

function random_bg_color() {
  var randomColor = Math.floor(Math.random() * 256);
  var x = randomColor;
  var y = randomColor;
  var z = randomColor;
  var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  document.body.style.background = bgColor;
}
//add
const greet = ["Hey, what's up?", 'Hello there', 'Hallo freunde', 'Hey mate'];

const greetings = [
  'I am good you little piece of love',
  'Doing good homeboi',
  'Leave me alone',
];

const weather = ['Weather is fine'];

const foxSays = [
  'Purr - purr',
  'Ring-ding-ding-ding-dingeringeding!, Ring-ding-ding-ding-dingeringeding!, Ring-ding-ding-ding-dingeringeding!',
  'Wapapapapapapow!, Wapapapapapapow!, Wapapapapapapow!',
  'I dont know, go ask a fox',
];

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log('Voice is activated, you can speak to microphone');
};

recognition.onresult = function (event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

//add the Listener to the button

btn.addEventListener('click', () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = 'I dont understand what are you talking about';

  const finalTxt = function (words) {
    const finalText = words[Math.floor(Math.random() * words.length)];
    speech.text = finalText;
  };

  if (message.includes('hello')) {
    finalTxt(greet);
  }
  if (message.includes('how are you')) {
    finalTxt(greetings);
  }
  if (message.includes('how is the weather')) {
    finalTxt(weather);
  }
  if (message.includes('Fox Say')) {
    finalTxt(foxSays);
  }
  if (message.includes('background')) {
    random_bg_color();
    speech.text = 'Done, MATE';
  }
  if (message.includes('dark mode')) {
    if (localStorage.getItem('darkMode') === 'true') {
      disableDarkMode();
      speech.text = 'Dark mode dis activated';
    } else {
      enableDarkMode();
      speech.text = 'Dark mode activated';
    }
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 3;

  window.speechSynthesis.speak(speech);
}

// const dayNightMode = function () {
//   this.classList.toggle('bi-moon');
//   if (this.classList.toggle('bi-brightness-high-fill')) {
//     body.style.background = 'white';
//     body.style.color = 'black';
//     body.style.transition = '2s';
//   } else {
//     body.style.background = 'black';
//     body.style.color = 'white';
//     body.style.transition = '2s';
//   }
// };
// darkMode.addEventListener('click', dayNightMode);
//check if dark mode is enabled
//if it's enabled, turn it off
//if it's disabled, turn it onresult
const enableDarkMode = () => {
  //1. add the class darkmode to the body
  document.body.classList.add('darkmode');
  darkMode = 'enabled';
  //2. update darkMode in the localStorage
  localStorage.setItem('darkMode', 'true');
};
const disableDarkMode = () => {
  //1. add the class darkmode to the body
  document.body.classList.remove('darkmode');
  darkMode = 'disabled';
  //2. update darkMode in the localStorage
  window.localStorage.setItem('darkMode', 'false');
};

if (localStorage.getItem('darkMode') === 'true') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = window.localStorage.getItem('darkMode');
  if (darkMode !== 'true') {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
});

image.style.width = '450px';
image.style.height = 'auto';
