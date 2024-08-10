const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let inputOne = document.querySelector(".first-input");
let inputTwo = document.querySelector(".second-input");

function random() {
  let randomOne = "";
  let randomTwo = "";
  for (let i = 0; i < 5; i++) {
    randomOne += characters[Math.floor(Math.random() * characters.length)];
    randomTwo += characters[Math.floor(Math.random() * characters.length)];
  }

  inputOne.value = randomOne;
  inputTwo.value = randomTwo;
}

// Check if this is the first time the site is opened
if (!localStorage.getItem("visited")) {
  // Perform actions when the site is opened for the first time
  // Clear the date or any other action
  // Example: setting the inputs to an empty string
  inputOne.value = "";
  inputTwo.value = "";

  // Run the random function if needed
  random();

  // Mark that the site has been visited
  localStorage.setItem("visited", "true");
}
