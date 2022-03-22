'use strict';

function advice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      document.getElementById(
        'advice-num'
      ).innerHTML = `ADVICE # <span>${data.slip.id}</span>`;

      document.getElementById(
        'generator'
      ).innerHTML = `<p id="advice-gen">${data.slip.advice}</p>`;
    });
}
fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    document.getElementById(
      'advice-num'
    ).innerHTML = `ADVICE # <span>${data.slip.id}</span>`;
    document.getElementById(
      'generator'
    ).innerHTML = `<p id="advice-gen">${data.slip.advice}</p>`;
  });

document.getElementById('dice').addEventListener('click', advice);
