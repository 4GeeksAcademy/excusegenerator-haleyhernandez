import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  let excuse = () => {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let ind1 = Math.floor(Math.random() * who.length);
let ind2 = Math.floor(Math.random() * action.length);
let ind3 = Math.floor(Math.random() * what.length);
let ind4 = Math.floor(Math.random() * when.length);
return who[ind1] + " " + action[ind2]  + " " + what[ind3]  + " " + when[ind4] + "."
}

document.querySelector('#excuses').innerHTML = excuse()
};
