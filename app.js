function trueyFalsyCheck() {
  let x = 6;
  if (x > 5) {
    console.log("truthy");
  } else {
    console.log("falsy");
  }
}
trueyFalsyCheck();

const age = prompt("Please enter your age");
if (age < 18) {
  console.log("არასრულწლოვანი ხარ");
} else if (age <= 65) {
  console.log("შენ ზრდასრული ხარ");
} else if (age > 65) {
  console.log("თქვენ ხართ ხანდაზმული მოქალაქე");
}

let grade = 41;
let results;
switch (true) {
  case grade > 100:
    results = "is not valid";
  case grade > 91:
    results = "A";
    break;
  case grade > 81:
    results = "B";
    break;
  case grade > 71:
    results = "C";
    break;
  case grade > 61:
    results = "D";
    break;
  case grade > 51:
    results = "E";
    break;
  case grade < 51:
    results = "F(X)";
  default:
}
console.log(results);
