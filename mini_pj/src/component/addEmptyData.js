import moment from "moment";

function addEmptyData(menuArr, selectMonth) {
 const formatDate = moment(selectMonth).format("YYYY-MM");
 const date = moment(formatDate).daysInMonth();
 const startMonth = parseInt(selectMonth + "01");
 const endMonth = startMonth + date - 1;
 let num = 0;
 if (menuArr.length) {
  for (let i = startMonth; i <= endMonth; i++) {
   if (menuArr[num] && i !== parseInt(menuArr[num][0])) {
    menuArr.unshift([i.toString(), "해당 없음"]);
   }
   num += 1;
  }
  menuArr.sort();
  return menuArr;
 } else {
  for (let i = startMonth; i <= endMonth; i++) {
   menuArr[num] = [i.toString(), "해당없음"];
   num++;
  }
  return menuArr;
 }
}
export default addEmptyData;
