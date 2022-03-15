// Lab 06 JavaScript file.

// random number gen, same as used in class
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// connects to HTML to fil-in content
let cityProfile = document.getElementById('content');
