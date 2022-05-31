import React, { useRef } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

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
        <input type="text" placeholder="검색하세요" ref={inputref}></input>
        <select name="city">
          <option value="daegu">대구</option>
          <option value="busan">부산</option>
        </select>
        <Link to="/view">
          <button onClick={data}>검색</button>
        </Link>
      </div>
      {/* <Outlet></Outlet> */}
    </div>
  );
}

export default Search;
