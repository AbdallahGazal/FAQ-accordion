"use strict";
const q1EL = document.querySelector(".q--1");
const q2EL = document.querySelector(".q--2");
const q3EL = document.querySelector(".q--3");
const q4EL = document.querySelector(".q--4");
const ans1EL = document.querySelector(".ans--1");
const ans2EL = document.querySelector(".ans--2");
const ans3EL = document.querySelector(".ans--3");
const ans4EL = document.querySelector(".ans--4");
const image1EL = document.querySelector(".icon--1");
const image2EL = document.querySelector(".icon--2");
const image3EL = document.querySelector(".icon--3");
const image4EL = document.querySelector(".icon--4");

let ans1State = false;
let ans2State = false;
let ans3State = false;
let ans4State = false;

q1EL.addEventListener("click", function () {
  ans1State = ans1State === true ? false : true;
  if (ans1State === true) {
    ans1EL.classList.add("show--ans1");
    image1EL.style.backgroundImage = "url(assets/images/icon-minus.svg)";
  } else {
    ans1EL.classList.remove("show--ans1");
    image1EL.style.backgroundImage = "url(assets/images/icon-plus.svg)";
  }
});

q2EL.addEventListener("click", function () {
  ans2State = ans2State === true ? false : true;
  if (ans2State === true) {
    ans2EL.classList.add("show--ans2");
    image2EL.style.backgroundImage = "url(assets/images/icon-minus.svg)";
  } else {
    ans2EL.classList.remove("show--ans2");
    image2EL.style.backgroundImage = "url(assets/images/icon-plus.svg)";
  }
});

q3EL.addEventListener("click", function () {
  ans3State = ans3State === true ? false : true;
  if (ans3State === true) {
    ans3EL.classList.add("show--ans3");
    image3EL.style.backgroundImage = "url(assets/images/icon-minus.svg)";
  } else {
    ans3EL.classList.remove("show--ans3");
    image3EL.style.backgroundImage = "url(assets/images/icon-plus.svg)";
  }
});

q4EL.addEventListener("click", function () {
  ans4State = ans4State === true ? false : true;
  if (ans4State === true) {
    ans4EL.classList.add("show--ans4");
    image4EL.style.backgroundImage = "url(assets/images/icon-minus.svg)";
  } else {
    ans4EL.classList.remove("show--ans4");
    image4EL.style.backgroundImage = "url(assets/images/icon-plus.svg)";
  }
});
