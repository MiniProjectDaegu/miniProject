import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Calendar1 from "./component/Calendar";
import getData from "./api/getData";
import dataProcessing from "./component/dataProcessing";
import "./View.css";

let today = new Date();
today = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2);

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const day = ["월", "화", "수", "목", "금", "토", "일"];
function View({ searchParams, schoolCode }) {
  const [date, setDate] = useState(today);
  const [mealCode, setMealCode] = useState("1");
  const [data, setData] = useState([]);
  const [menu, setMenu] = useState({});

  const selectMonth = (event) => {
    let date = 0;
    if (event.target.value < 10) {
      date = "20220" + event.target.value;
    } else {
      date = "2022" + event.target.value;
    }
    setDate(date);
  };
  //시도코드, 학교코드,날짜,식사타입 받아서 api접근
  useEffect(() => {
    const fetch = async () => {
      const data = await getData({
        ATPT_OFCDC_SC_CODE: searchParams.get("ATPTCode"),
        SD_SCHUL_CODE: schoolCode,
        MLSV_YMD: date,
        MMEAL_SC_CODE: mealCode,
      });
      setData(data.mealServiceDietInfo[1]);
    };
    schoolCode && fetch();
    data && setMenu(dataProcessing(data));
  }, [mealCode]);
  console.log(menu);
  return (
    <div className="view_container">
      <div className="view_select">
        <select className="view_month" name="month" onChange={selectMonth}>
          <option value="">월</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <span>오늘의 식단</span>
        <select
          className="view_time"
          name="list"
          onClick={(event) => {
            setMealCode(event.target.value);
          }}
        >
          <option value="">분류</option>
          <option value="1">조식</option>
          <option value="2">중식</option>
          <option value="3">석식</option>
        </select>
      </div>
      <Calendar1 today={date} />
    </div>
  );
}

export default View;
