let ageguess
let myage

document.getElementById('userguess').addEventListener('click', myfunction)
function myfunction () {
  ageguess = document.getElementById('agetyped').value
  myage = 15
  while (myage != ageguess){
    if (ageguess < myage) {
    ageguess = prompt("Guess too small! Guess a bigger number")
  }
    else if (ageguess > myage) {
    ageguess = prompt("Guess too big! Guess a smaller number")
  }
  } 
  alert('Correct!')
} 