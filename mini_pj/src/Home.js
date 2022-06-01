import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to="/">
        <div>Home</div>
      </Link>
      <div className="divcss">
        <Link to="/search">
          <img
            src="https://en.pimg.jp/038/426/713/1/38426713.jpg"
            alt="초등학교"
          />
        </Link>
        <Link to="/search">
          <img
            src="https://en.pimg.jp/038/426/713/1/38426713.jpg"
            alt="중학교"
          />
        </Link>
        <Link to="/search">
          <img
            src="https://en.pimg.jp/038/426/713/1/38426713.jpg"
            alt="고등학교"
          />
        </Link>
      </div>
    </>
  );
}

export default Home;
