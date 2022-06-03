import moment from "moment";
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
