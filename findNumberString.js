var array_one = ["abc", "ab10c", "a10bc", "bcd", "skaiffncba102"];

function abc(array_one) {
  var string_arr = [];
  array_one.forEach((Element) => {
    var reg = /\d/;
    if (Element.match(reg)) {
      string_arr.push(Element);
    } else {
      return 0;
    }
  });
  return console.log(string_arr);
}
abc(array_one);


WithOut Function

var arr_a = ["1a", "a", "2b", "b"];
var string_arr = [];
arr_a.forEach((Element) => {
  // console.log(Element);
  var reg = /\d/;
  if (Element.match(reg)) {
    string_arr.push(Element);
  } else {
    return 0;
  }
});
console.log(string_arr);
