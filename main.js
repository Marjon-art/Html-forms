/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/tooltip.js
class Tooltip {
  constructor() {
    this._tooltips = [];
  }
  showTooltip() {
    const div = document.createElement('div');
    div.classList.add("popover");
    let p_1 = document.createElement('p');
    p_1.textContent = 'Title popover';
    p_1.classList.add("colorP");
    let p_2 = document.createElement('p');
    p_2.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione';
    const arrow = document.createElement('div');
    arrow.classList.add('arrow');
    div.append(p_1);
    div.append(p_2);
    div.append(arrow);
    const button = document.createElement('button');
    button.classList.add('mypopoverBtn');
    button.textContent = 'Click to toggle popover';
    document.body.append(div);
    document.body.append(button);
  }
}
;
;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here


new Tooltip().showTooltip();
const app_button = document.querySelector("button");
const popover = document.querySelector(".popover");
app_button.addEventListener("click", () => {
  popover.classList.add("popover_2");
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;