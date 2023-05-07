function sevenBoom(arr) {
  let a = arr.toString().split("").includes("7");

  if (a == true) {
    console.log("Boom!");
  } else {
    console.log("there is no 7 in the array");
  }
}
sevenBoom(["123597", "dmflds"]);


