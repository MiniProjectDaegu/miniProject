import React, { useEffect, useState, useRef } from "react";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";
import { getATPTCode } from "./api/getATPTCode";
import getData from "./api/getData";
import getSchoolType from "./component/getSchoolType";
import View from "./View";
import "./Search.css";

function Search() {
  //useParams로 초,중,고 입력받음
  const schoolType = getSchoolType(useParams());
  const [ATPTCodeList, SetATPTCodeList] = useState([]);
  const [ATPTCode, SetATPTCode] = useState("");
  const [schoolName, SetSchoolName] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputQuery, setInputQuery] = useState(false);
  const inputRef = useRef("");
  const [schoolCode, SetSchoolCode] = useState("");
  //
  useEffect(() => {
    const fetch = async () => {
      const data = await getATPTCode();
      SetATPTCodeList(data);
    };
    fetch();
  }, []);
  const getATPT = (event) => {
    SetATPTCode(event.target.value);
  };
  const onClick = () => {
    setInputQuery(!inputQuery);
    SetSchoolName(inputRef.current.value);
    setSearchParams(
      inputRef.current.value && ATPTCode
        ? {
            ATPTCode: ATPTCode,
            schoolName: inputRef.current.value,
          }
        : {}
    );
  };
  useEffect(() => {
    const fetch = async () => {
      const data = await getData({
        ATPT_OFCDC_SC_CODE: ATPTCode,
        SCHUL_NM: schoolName,
        SCHUL_KND_SC_NM: schoolType,
      });
      SetSchoolCode(data.schoolInfo[1].row[0].SD_SCHUL_CODE);
    };
    schoolName && fetch();
  }, [schoolName]);

  return inputQuery ? (
    <View searchParams={searchParams} schoolCode={schoolCode}></View>
  ) : (
    <div className="search_body">
      <div className="divcss">
        <div className="search">
          <img className="search_img" src="./sick.png"></img>

          <div className="search_select_main">
            <select className="search_select" name="city" onChange={getATPT}>
              <option value="">시/도</option>
              {ATPTCodeList.map((ATPTCode) => (
                <option
                  key={ATPTCode.ATPT_OFCDC_SC_CODE}
                  value={ATPTCode.ATPT_OFCDC_SC_CODE}
                >
                  {ATPTCode.ATPT_OFCDC_SC_NM}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              className="searchForm"
              type="text"
              placeholder={`${schoolType}를 검색하세요`}
              ref={inputRef}
            ></input>
          </div>
          <div>
            <button className="searchBtn" onClick={onClick}>
              검색
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
