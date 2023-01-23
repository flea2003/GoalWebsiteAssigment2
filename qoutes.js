//We declare some global variables that we use in tracking functions
var timeStart;
let numberofclicks = 0;
let numberofkey = 0;

//When all the content of the page has been loaded,
// we initialize the variable timeStart with the current time at that time
window.onload=init;
function init(){
  timeStart= new Date().getTime();
}

// Script related to the random quotes section of the web site
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

// We add an event handler and assign it to the "submit" event of the Sign Up form
// If all the data that the user has inputed is validated the function which displays the behavioural tracking
// of the user is invoked. Else the form is not submitted until all the data is validated.

var form = document.getElementById("signup-form");
form.addEventListener("submit",(event)=>{
  if(!validateForm()){
    event.preventDefault();
  }
  else{
    functions();
  }
});
// Input Validation Function
function validateForm(){
  var flag=true;

  var Error = document.getElementById("error");
  Error.innerHTML = "";
//Name
  var Name=document.getElementById("name").value;
  let valName=/^[A-Za-z]{1,}$/.test(Name);
  if(!valName){
    Error.innerHTML += "Error: Your name must consist only of english alphabet letters (You can't leave this field blank)\n";
    return false;
  }

//Surname
  var surname = document.getElementById("surname").value;
  let valSurname=/^[A-Za-z]{1,}$/.test(surname);
  if(!valSurname){
    Error.innerHTML += "Error: Your surname must consist only of english alphabet letters (You can't leave this field blank)\n";
    return false;
  }

//Sex
if(document.getElementById("Seks").value.length==0){
  Error.innerHTML += "Error: No value selected for field - Sex\n";
  return false;
}
//Email
var email = document.getElementById("email").value;
if(email.length == 0){
  Error.innerHTML += "Error: No value entered in the field - Email\n";
  return false;
}
//User ID
  var userID=document.getElementById("user-id").value;
  var valUserID= /^[A-Z].{3,10}[\d!"#$%&'()*+,-./:;<=>?@[\^_`{|}~]$/.test(userID);
  if(!valUserID){
    Error.innerHTML += "Error: User Id must be between 5 and 12 characters, must start with a capital letter and must end with a number or a special symbol.\n";
    return false;
  }

//Password
var password = document.getElementById("password").value;
var valPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/.test(password);
if(!valPassword){
  Error.innerHTML += "Error: Your password must have at least 12 characters and have at least 1 uppercase letter, lowercase letter, number and symbol\n";
  return false;
}

//Country
  if(document.getElementById("country").value.length==0){
    Error.innerHTML += "Error: No value selected for field - Country \n";
    return false;
  }
//ZIP
var zip = document.getElementById("zip").value;
var valZIP= /^[\d]{4}[A-Za-z]{2}$/.test(zip);
if(!valZIP){
  Error.innerHTML += "Error: The ZIP code must corresspond to the Netherland format \n";
  return false;

}
//Language
  if(document.getElementById("language").value.length==0){
    Error.innerHTML += "Error: No value selected for field - Language \n";
    return false;
  }

  Error.innerHTML = "";
  return true;

}


// We assign event handlers to the "click" and "keypress" events
document.addEventListener("click", functionaddclick);
document.addEventListener("keypress", functionaddpress);

// We increase the value of the global variable numberofclicks
function functionaddclick(){
  numberofclicks++;
}
// We increase the value of the global variable numberofkey
function functionaddpress(){
  numberofkey++;
}

// Updates the HTML with the the number of clicks
function click(){
  var text = document.getElementById("clicks");
  text.innerHTML = "Number of clicks: " + numberofclicks;
}
// Updates the HTML with the number of key presses
function press(){
  var text = document.getElementById("press");
  text.innerHTML = "Number of key presses: " + numberofkey;
}

// Updates the HTML with the time spent on the page
function timeSpent(timeStart){
  var end= new Date().getTime();
  var timp = new Date(end - timeStart);
  var m= timp.getMinutes();
  var s=timp.getSeconds();
  var text=document.getElementById("time");
  text.innerHTML="Time spent: "+m+" minutes and "+s+" seconds";
  
}
// Updates the HTML with the number of characters that the user has typed
function typed(){
  let sum = 0;
  var arr = document.getElementsByClassName("inputt");
  for(let i=0;i<arr.length;i++){
    sum += arr[i].value.length;
    console.log(arr[i].value);
  }
  var text = document.getElementById("characters");
  text.innerHTML = "Number of characters typed: " + sum;
}

// Displays all the data related to the behavioural tracking
function functions(){
  document.getElementById("ascuns").style.display = "block";
  window.scrollTo(0,0);
  click();
  timeSpent(timeStart);
  press();
  typed();

}
