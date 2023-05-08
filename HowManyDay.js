//How many days between two days
function getDays(date1, date2) {
  let first_date = date1;
  let second_date = date2;
  let date_diff = Math.abs(first_date - second_date);
  let result = Math.ceil(date_diff / (1000 * 24 * 60 * 60));
  console.log(result);
}