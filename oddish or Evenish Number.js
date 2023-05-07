// With Function
function oddishOrEvenish(num) {
  let digits = num.toString().split("");
  let total = 0;
  digits.forEach((Element) => {
    total += parseInt(Element);
  });
  if (total % 2 == 0) {
    return "Evenish";
  } if (total % 2 == 1) {
    return "Oddish";
  }
}


/*======= Without Function
Separate a number and add them and find weither oddish or evenish 
=========*/
var number_var = 373;
let digits = number_var.toString().split("");
let total = 0;
digits.forEach((Element) => {
  total += parseInt(Element);
});
console.log(total);
if (total / 2 == 0) {
  console.log("Evenish");
} else {
  console.log("Oddish");
}