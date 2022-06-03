import moment from "moment";
import formArray from "./formArray";
import addEmptyData from "./addEmptyData";
function dataProcessing(data, selectMonth) {
 let menuArr = [];
 if (data) {
  menuArr = formArray(data);
  menuArr = addEmptyData(menuArr, selectMonth);
  return menuArr;
 } else {
  menuArr = addEmptyData(menuArr, selectMonth);
  return menuArr;
 }
}
export default dataProcessing;
