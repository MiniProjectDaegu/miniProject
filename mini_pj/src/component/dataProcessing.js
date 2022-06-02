function dataProcessing(data) {
  const date = 30;
  const startMonth = 20220601;
  const endMonth = startMonth + date - 1;
  let num = 0;

  if (data.row) {
    console.log();
    let menuArr = [];
    let textArr = [];
    let menu = [];
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
    if (menuArr) {
      for (let i = 0; i < menuArr.length; i++) {
        let text = "";
        for (let j = 1; j < menuArr[i].length; j++) {
          text = text + menuArr[i][j] + "/n";
          textArr[i] = text;
        }
      }
      for (let i = 0; i < date; i++) {
        menu[i] = { day: menuArr[i][0], menu: textArr[i] };
      }
    }
    return menu;
  }
}
export default dataProcessing;
