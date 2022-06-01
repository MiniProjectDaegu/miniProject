import React from "react";
import { Outlet, Link } from "react-router-dom";
import Home from "./Home";
function Main() {
  return (
    <>
      <header>
        <h1>오늘 뭐 나오지?</h1>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <span className="home">home</span>
        </Link>
      </header>
      <Outlet />
    </>
  );
}
export default Main;
