import React from "react";
import { Link, Outlet } from "react-router-dom";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Home from "./Home";

function Main() {
  return (
    <>
      <header>
        <div className="header_container">
          <Link to="">
            <img className="header_img" src="/logo_white.png"></img>
          </Link>
          <h1 className="header_title">오늘 뭐 나오지?</h1>
          <Link className="link_home" to="/">
            <div className="header_home">HOME</div>
          </Link>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
      <div className="main_footer">
        <div>
          <FontAwesomeIcon icon={faSchool} size="1x" />
        </div>
      </div>
    </>
  );
}
export default Main;
