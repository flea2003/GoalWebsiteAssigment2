const button = document.getElementById("btn");
button.addEventListener("click", addNewItem);
      
function addNewItem(evt) {
  let menu_item = document.getElementById("menu-item").value;
  let menu = document.getElementById("menu");
  let li = document.createElement("li");
  let text = document.createTextNode(menu_item);
  li.appendChild(text);
  menu.appendChild(li);
  document.getElementById('menu-item').value = "";
}

var up = document.getElementById("nemo");


var safeSet = [
  "It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform. ― Roy T. Bennett",
  "Start each day with a positive thought and a grateful heart. ― Roy T. Bennett, The Light in the Heart",
  "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain. ― Frank Herbert, Dune",
  "If you've got nothing to dance about, find a reason to sing. ― Melody Carstairs",
  "Ever Tried. Ever Failed. No matter. Try again. Fail again. Fail better. ― Samuel Beckett",
  "A ship is safe in harbor, but that's not what ships are for. ― William Shedd",
  "SIUUUUUU ― Cristiano Ronaldo",   
  "Be the person your dog thinks you are. ― J.W. Stephens",
  "The mighty Oak tree was once a nut that stood its ground. ― Unknown",
  "No man ever steps in the same river twice, for it's not the same river and he's not the same man. ― Heraclitus",
  "It gets easier. Every day it gets a little easier. But you gotta do it everyday, that's the hard part. But it does get easier. ― Bojack Horseman",
  "In spite of everything I still believe that people are really good at heart. ― Anne Frank"
];


function random(mn, mx) {
  return Math.random() * (mx - mn) + mn;
}

myFunction = () =>{
    document.getElementById("nemo").innerHTML = safeSet[Math.floor(Math.random() * (11))];
}

document.getElementById("lol").addEventListener("click", myFunction);

myFunction();

let buttonSignUp = document.getElementById("signup");
buttonSignUp.addEventListener("click", functions);

let numberofclicks = 0;

document.addEventListener("click", functionaddclick);

function functionaddclick(){
  numberofclicks++;
}

function click(){
  let li = document.createElement("li");
  let text = document.createTextNode("Number of clicks: " + numberofclicks);
  li.appendChild(text);
  document.getElementById("bruceli").appendChild(li);
}

function functions(){
  document.getElementById("ascuns").style.display = "block";
  click();
}
