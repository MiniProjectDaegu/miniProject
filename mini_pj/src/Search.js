import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

import "./Search.css";
import { getATPTCode } from "./api/getATPTCode";

function Search() {
  //useParams로 초,중,고 입력받음
  const schoolType = useParams();
  console.log(schoolType);
  //시도코드 getATPTCode에서 받을예정
  const [ATPTCodeList, SetATPTCodeList] = useState([]);
  console.log(ATPTCodeList);
  useEffect(() => {
    const fetch = async () => {
      const data = await getATPTCode();
      SetATPTCodeList(data);
      console.log(data);
    };
    fetch();
  }, []);

  //시도코드,학교이름 입력받아서 api 접근후 학교코드 받기

  // const { value } = useParams();
  const inputref = useRef();
  const data = () => {
    console.log(inputref.current.value);
  };

  return (
    <div className="divcss">
      <div className="search">
        <div className="search_select">
          <select name="city">
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
            type="text"
            className="searchForm"
            placeholder="검색하세요"
            ref={inputref}
          ></input>
        </div>
        <Link to="/view">
          <div>
            <button className="searchBtn" onClick={data}>
              검색
            </button>
          </div>
        </Link>
      </div>
      {/* <Outlet></Outlet> */}
    </div>
  );
}

export default Search;
