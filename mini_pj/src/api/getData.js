import requests from "./requests";

const BASE_URL = "https://open.neis.go.kr/hub/";
const schoolURL = "schoolInfo";
const mealURL = "mealServiceDietInfo";
const API_KEY = "8b9c5f2ff1b440d6b23ee906fff148bb";
const pIndex = 1;
const pSize = 1000;
const defaultParam = {
 KEY: API_KEY,
 Type: "json",
 pIndex: pIndex,
 pSize: pSize,
};
let url = "";
const getData = async (paramObj) => {
 const params = new URLSearchParams({
  ...defaultParam,
  ...paramObj,
 }).toString();
 if (paramObj.SCHUL_KND_SC_NM) {
  url = `${BASE_URL}${schoolURL}?${params}`;
 } else {
  url = `${BASE_URL}${mealURL}?${params}`;
 }
 console.log(url);
 const data = await requests(url);
 return data;
};

export default getData;
