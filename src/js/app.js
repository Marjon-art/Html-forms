// TODO: write code here

import { Tooltip } from "./tooltip";


console.log('app.js bundled');

const form = document.querySelector(".form");

const errors = {
login: {
   valueMissing: "Представьтесь пожалуйста",
},
email: {
   valueMissing: "Нам потребуется элетропочта...",
   typeMismatch: "А это точона электропоята?", 
}
};

const tooltipFactory = new Tooltip();
//обявление переменую с активными тултипами 
let actualMessages = [];

form.addEventListener("submit", (e) => {
e.preventDefault();
actualMessages.forEach((id) => tooltipFactory.removeTooltip(id));

actualMessages = [];
 if (form.checkValidity()) {
    console.log("valid");
 } else {
    console.log("invalid");
 }

 const elements = [...form.elements];

 elements.some((el) => {
return Object.keys(ValidityState.prototype).some((key) => {
if(!el.name) return;
if(key === "valid" ) return;
   if(el.validity[key]) {
  console.log(key);
  console.log(errors[el.name][key]);
  actualMessages.push(tooltipFactory.showTooltip(errors[el.name][key], el));
  return true;
   }
   })
 })
console.log("submit");

})