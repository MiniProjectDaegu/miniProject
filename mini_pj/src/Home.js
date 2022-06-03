import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="school_container">
        <div className="school_background">
          <div className="testdiv">
            <Link className="link_text" to="/element">
              <img
                className="element_school_img"
                src="/element_school.jpg"
                alt="초등학교"
              />
            </Link>
            <h1>초등학교</h1>
          </div>
        </div>

        <div className="school_background">
          <div className="testdiv">
            <Link className="link_text" to="/middle">
              <img
                className="middle_school_img"
                src="/middle_school.jpg"
                alt="중학교"
              />
            </Link>
            <h1>중학교</h1>
          </div>
        </div>

        <div className="school_background">
          <div className="testdiv">
            <Link className="link_text" to="/high">
              <img
                className="high_school_img"
                src="/high_school.jpg"
                alt="고등학교"
              />
            </Link>
            <h1>고등학교</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
