export function getMonth(today) {
 let todayMonth = parseInt(today.slice(-2));
 let monthArr = [];
 for (let i = 0; i < 12; i++) {
  if (todayMonth == 12) {
   monthArr[i] = todayMonth;
   todayMonth = 1;
  } else {
   monthArr[i] = todayMonth;
   todayMonth++;
  }
 }
 return monthArr;
}

export function formMonth(event, setDate) {
 let date = 0;
 if (event.target.value < 10) {
  date = "20220" + event.target.value;
 } else {
  date = "2022" + event.target.value;
 }
 setDate(date);
}
