import moment from "moment";
function dataProcessing(data, selectMonth) {
 const formatDate = moment(selectMonth).format("YYYY-MM");
 const date = moment(formatDate).daysInMonth();
 const startMonth = parseInt(selectMonth + "01");
 const endMonth = startMonth + date - 1;
 let num = 0;

 if (data.row) {
  let menuArr = [];
  for (let i = 0; i < data.row.length; i++) {
   menuArr[i] = data.row[i].DDISH_NM.split("<br/>");

   for (let j = 0; j < menuArr[i].length; j++) {
    if (menuArr[i][j].includes("-")) {
     menuArr[i][j] = menuArr[i][j].split("-")[0];
    }
    if (menuArr[i][j].includes("(")) {
     menuArr[i][j] = menuArr[i][j].split("(")[0];
    }
   }
   menuArr[i].unshift(data.row[i].MLSV_YMD);
  }

  for (let i = startMonth; i <= endMonth; i++) {
   if (i !== parseInt(menuArr[num][0])) {
    menuArr.unshift([i.toString(), "해당 없음"]);
   }
   num += 1;
  }
  menuArr.sort();
  return menuArr;
 }
}
export default dataProcessing;
