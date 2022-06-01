import React, { useRef } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import "./Search.css";
function Search() {
  //   const { value } = useParams();
  const inputref = useRef();
  const data = () => {
    console.log(inputref.current.value);
    // return <div>{value}</div>;
    // console.log(inputref.current.value);
  };

  return (
    <div className="divcss">
      <div className="search">
        <div>
          <select name="city">
            <option value="daegu">대구</option>
            <option value="busan">부산</option>
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
