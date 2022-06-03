function formArray(data) {
 let menuArr = [];
 for (let i = 0; i < data[1].row.length; i++) {
  menuArr[i] = data[1].row[i].DDISH_NM.split("<br/>");

  for (let j = 0; j < menuArr[i].length; j++) {
   if (menuArr[i][j].includes("-")) {
    menuArr[i][j] = menuArr[i][j].split("-")[0];
   }
   if (menuArr[i][j].includes("(")) {
    menuArr[i][j] = menuArr[i][j].split("(")[0];
   }
  }
  menuArr[i].unshift(data[1].row[i].MLSV_YMD);
 }
 return menuArr;
}
export default formArray;
