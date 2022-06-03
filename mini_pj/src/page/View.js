import React, { useEffect, useState } from "react";
import Calendar from "../component/Calendar";
import getData from "../api/getData";
import dataProcessing from "../component/dataProcessing";
import "./View.css";
import { getMonth } from "../component/getMonth";
import MonthSelect from "../component/MonthSelect";
let today = new Date();
today = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2);
function View({ searchParams, schoolCode }) {
 const schoolName = searchParams.get("schoolName");
 const months = getMonth(today);

 const [date, setDate] = useState(today);
 const [mealCode, setMealCode] = useState(2);
 const [menu, setMenu] = useState({});

 useEffect(() => {
  const fetch = async () => {
   const data = await getData({
    ATPT_OFCDC_SC_CODE: searchParams.get("ATPTCode"),
    SD_SCHUL_CODE: schoolCode,
    MLSV_YMD: date,
    MMEAL_SC_CODE: mealCode,
   });
   const finalData = dataProcessing(data.mealServiceDietInfo, date);
   data && setMenu(finalData);
  };
  schoolCode && fetch();
 }, [mealCode, date]);

 return (
  <div className="view_container">
   <div className="view_select">
    <img className="cal_left_img" src="/run.png"></img>
    <MonthSelect months={months} setDate={setDate}></MonthSelect>
    <span>오늘의 식단</span>
    <select
     className="view_time"
     name="list"
     onChange={(event) => {
      setMealCode(event.target.value);
     }}
    >
     <option value="2">중식</option>
     <option value="3">석식</option>
     <option value="1">조식</option>
    </select>
    <img className="cal_right_img" src="/sick.png"></img>
   </div>
   {JSON.stringify(menu) !== "{}" ? (
    <Calendar menu={menu} date={date} schoolName={schoolName} />
   ) : (
    <></>
   )}
  </div>
 );
}

export default View;
