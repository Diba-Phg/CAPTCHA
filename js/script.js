let numbers = document.getElementById("numbers");
let numInput = document.getElementById("numInput");
let submit = document.getElementById("submit");
let refresh = document.getElementById("refresh");

numbers.innerHTML = `${Math.floor(Math.random() * 1000000)}`;
refresh.addEventListener("click", function () {
  numbers.innerHTML = `${Math.floor(Math.random() * 1000000)}`;
});
submit.addEventListener("click", function () {
  if (numInput.value == numbers.innerHTML) {
    alert("Congrats! You're registered as a human");
    numInput.value = "";
  } else {
    alert("Sorry! You're a robot");
    numInput.value = "";
  }
  numbers.innerHTML = `${Math.floor(Math.random() * 1000000)}`;
});
