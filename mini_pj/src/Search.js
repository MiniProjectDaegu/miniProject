import React, { useEffect, useState, useRef } from "react";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";
import { getATPTCode } from "./api/getATPTCode";
import getData from "./api/getData";
import getSchoolType from "./component/getSchoolType";

function Search() {
  //useParams로 초,중,고 입력받음
  // ?? view 컴포넌트로 옮길 예정
  // const schoolType = getSchoolType(useParams());
  // console.log(schoolType);
  //시도코드 getATPTCode에서 받을예정
  const [ATPTCodeList, SetATPTCodeList] = useState([]);
  const [ATPTCode, SetATPTCode] = useState("");
  // const [schoolName, SetSchoolName] = useState(null);
  const [searchparams, setSearchparams] = useSearchParams();
  const inputRef = useRef("");
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
    // SetSchoolName(inputRef.current.value);
    console.log(!!inputRef.current.value);
    console.log(!!ATPTCode);
    setSearchparams(
      inputRef.current.value && ATPTCode
        ? {
            shcoolCode: ATPTCode,
            schoolName: inputRef.current.value,
          }
        : {}
    );
  };
  console.log(searchparams.get("학교이름"));
  console.log(searchparams.get("shcoolCode"));
  console.log();

  return (
    <div className='divcss'>
      <div className='search'>
        <input type='text' placeholder='검색하세요' ref={inputRef}></input>
        <select name='city' onChange={getATPT}>
          <option value=''>시/도</option>
          {ATPTCodeList.map((ATPTCode) => (
            <option
              key={ATPTCode.ATPT_OFCDC_SC_CODE}
              value={ATPTCode.ATPT_OFCDC_SC_CODE}
            >
              {ATPTCode.ATPT_OFCDC_SC_NM}
            </option>
          ))}
        </select>
        <Link to={`view?${searchparams}`}>
          <button onClick={onClick}>검색</button>
        </Link>
      </div>
      {/* <Outlet></Outlet> */}
    </div>
  );
}

export default Search;
