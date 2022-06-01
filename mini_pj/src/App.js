import "./App.css";
import { useState, useEffect } from "react";
import getData from "./api/getData";
import MealService from "./MealService";
import SchoolInfo from "./SchoolInfo";
import styled from "styled-components";
import SchoolCode from "./component/SchoolCode";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./Search";
import View from "./View";
import Home from "./Home";
import Main from "./Main";

const Container = styled.div`
  text-align: center;
  font-size: 30px;
`;

let today = new Date();
today = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2);
function App() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");
  const [schoolCode, setSchoolCode] = useState(null);
  const [date, setDate] = useState(today);
  const [schoolType, SetSchoolType] = useState("");

  // 나중에 맵함수로 데이터 뿌릴예정
  // SchoolCode();

  // useEffect(() => {
  //   const fetch = async () => {
  //     if (schoolCode === null) {
  //       const data = await getData({
  //         ATPT_OFCDC_SC_CODE: "B10",
  //         SCHUL_KND_SC_NM: "고등학교",
  //       });
  //     } else {
  //       const data = await getData({
  //         ATPT_OFCDC_SC_CODE: "C10",
  //         SD_SCHUL_CODE: schoolCode,
  //         MLSV_YMD: date,
  //       });
  //     }
  //     setData(data);
  //   };
  //   fetch();
  // }, [query]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path=':schoolType'>
            <Route index element={<Search />} />
            {/* <Route index element={<View />} /> */}
            <Route path=':schoolName' element={<View />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
