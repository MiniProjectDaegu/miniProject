import React from "react";
import { Link, Outlet } from "react-router-dom";
// import Home from "./Home";
function Main() {
  return (
    <>
      <header>
        <div className="header_container">
          <img className="header_img" src="/logo_white.png"></img>
          <h1 className="header_title">오늘 뭐 나오지?</h1>
          <Link className="link_home" to="/">
            <div className="header_home">HOME</div>
          </Link>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
export default Main;
