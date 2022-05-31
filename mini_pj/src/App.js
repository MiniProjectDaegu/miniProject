import "./App.css";
import { useState, useEffect } from "react";
import getData from "./api/getData";
import MealService from "./MealService";
import SchoolInfo from "./SchoolInfo";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-size: 30px;
`;

function App() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");
  const [schoolCode, setSchoolCode] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      if (schoolCode === null) {
        const data = await getData({ ATPT_OFCDC_SC_CODE: "C10" });
      } else {
        const data = await getData({
          ATPT_OFCDC_SC_CODE: "C10",
          SD_SCHUL_CODE: schoolCode,
        });
      }
      setData(data);
    };
    fetch();
  }, [query]);

  return (
    <>
      <Container>
        <SchoolInfo setQuery={setQuery}></SchoolInfo>
        <MealService setQuery={setQuery}></MealService>
      </Container>
    </>
  );
}

export default App;
