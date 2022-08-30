// Global Variables
const secondsEl = document.querySelector('#seconds');
const tensEl = document.querySelector('#tens');
const buttons = document.querySelectorAll('.btn');

let seconds = 0;
let tens = 0;
let Interval;

// Event Listeners
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let btnValue = e.target.innerHTML;
    switch (btnValue) {
      case 'Start':
        clearInterval(Interval);
        Interval = setInterval(startTime, 10);
        break;
      case 'Stop':
        clearInterval(Interval);
        break;
      case 'Reset':
        clearInterval(Interval);
        tens = '00';
        seconds = '00';
        tensEl.innerHTML = tens;
        secondsEl.innerHTML = seconds;
        break;
    }
  });
});

// Functions
function startTime() {
  tens++;
  if (tens <= 9) {
    // Less than ten milliseconds
    tensEl.innerHTML = '0' + tens;
  }
  if (tens > 9) {
    //  than ten milliseconds
    tensEl.innerHTML = tens;
  }
  if (tens > 99) {
    // A new second is about to be reached
    seconds++;
    secondsEl.innerHTML = '0' + seconds;

    tens = 0;
    tensEl.innerHTML = '0' + tens;
  }

  if (seconds > 9) {
    secondsEl.innerHTML = seconds;
  }
}
