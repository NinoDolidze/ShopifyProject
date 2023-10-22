"use strict";

let list = document.querySelector(".lists");
let mainList = document.querySelector(".faq_list_main_div");
let list_1 = document.querySelector("#lists2");
let list_2 = document.querySelector("#lists3");
let list_3 = document.querySelector("#lists4");
let counter = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

document.querySelector(".faq_plus_div").addEventListener("click", function () {
  if (counter === 0) {
    list.classList.remove("hidden");
    mainList.style.height = "900px";
    counter = 1;
  } else if (counter === 1) {
    list.classList.add("hidden");
    mainList.style.height = "500px";
    counter = 0;
  }
});

document.querySelector("#faq_list2").addEventListener("click", function () {
  if (counter2 === 0) {
    list_1.classList.remove("hidden");
    mainList.style.height = "900px";
    counter2 = 1;
  } else if (counter2 === 1) {
    list_1.classList.add("hidden");
    mainList.style.height = "500px";
    counter2 = 0;
  }
});

document.querySelector("#faq_list3").addEventListener("click", function () {
  if (counter3 === 0) {
    list_2.classList.remove("hidden");
    mainList.style.height = "900px";
    counter3 = 1;
  } else if (counter3 === 1) {
    list_2.classList.add("hidden");
    mainList.style.height = "500px";
    counter3 = 0;
  }
});

document.querySelector("#faq_list4").addEventListener("click", function () {
  if (counter4 === 0) {
    list_3.classList.remove("hidden");
    mainList.style.height = "900px";
    counter4 = 1;
  } else if (counter4 === 1) {
    list_3.classList.add("hidden");
    mainList.style.height = "500px";
    counter4 = 0;
  }
});
