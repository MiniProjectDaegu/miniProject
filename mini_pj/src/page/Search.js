import React, { useEffect, useState, useRef } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getATPTCode } from "../api/getATPTCode";
import getData from "../api/getData";
import getSchoolType from "../component/getSchoolType";
import View from "./View";
import ATPTSelect from "../component/ATPTSelect";
import SearchInput from "../component/SearchInput";
import "./Search.css";

function Search() {
 const schoolType = getSchoolType(useParams());
 const [searchParams, setSearchParams] = useSearchParams();
 const [ATPTCodeList, setATPTCodeList] = useState([]);
 const [ATPTCode, setATPTCode] = useState("");
 const [schoolName, setSchoolName] = useState(null);
 const [schoolCode, setSchoolCode] = useState("");
 const inputRef = useRef("");

 useEffect(() => {
  const fetch = async () => {
   const data = await getATPTCode();
   setATPTCodeList(data);
  };
  fetch();
 }, []);

 const onClick = () => {
  setSchoolName(inputRef.current.value);
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
   try {
    setSchoolCode(data.schoolInfo[1].row[0].SD_SCHUL_CODE);
   } catch (error) {
    alert("정보 없음");
    inputRef.current.value = "";
   }
  };
  schoolName && fetch();
 }, [schoolName]);
 return !!schoolCode && !!ATPTCode ? (
  <View searchParams={searchParams} schoolCode={schoolCode}></View>
 ) : (
  <div className="search_body">
   <div className="divcss">
    <div className="search">
     <img className="search_img" src="./sick.png"></img>
     <ATPTSelect setATPTCode={setATPTCode} ATPTCodeList={ATPTCodeList} />
     <SearchInput schoolType={schoolType} inputRef={inputRef} />
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
