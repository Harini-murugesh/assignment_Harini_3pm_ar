//if
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}

//if else
let temperature = 25;
if (temperature > 30) {
  console.log("It's a hot day.");
} else {
  console.log("It's a pleasant day.");
}


//if else if
let score = 75;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}


//switch case
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Just another day.");
}