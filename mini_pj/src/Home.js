import React, { useRef } from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  const getValue = (e) => {};

  return (
    <>
      <Link to='/'>
        <div>Home</div>
      </Link>
      <div className='divcss'>
        <Link to='/search'>
          <img src='/element_school.jpg' alt='초등학교' onClick={getValue} />
        </Link>
        <Link to='/search'>
          <img src='/middle_school.jpg' alt='중학교' onClick={getValue} />
        </Link>
        <Link to='/search'>
          <img src='/high_school.jpg' alt='고등학교' />
        </Link>
      </div>
    </>
  );
}

export default Home;
