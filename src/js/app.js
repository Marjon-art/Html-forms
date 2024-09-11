// TODO: write code here

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
form.addEventListener("submit", (e) => {
e.preventDefault();
 if (form.checkValidity()) {
    console.log("valid");
 } else {
    console.log("invalid");
 }

 const elements = form.elements;
 elements.some((el) => {
   console.dir(el);
   Object.keys(ValidityState.prototype).forEach((key) => {
if(!el.name) return;

   if(el.validity[key]) {
  console.log(key);
  console.log(el.errors[el.name][key]);
   }
   })
 })
console.log("submit");

})

