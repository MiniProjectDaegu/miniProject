import React from "react";

function NotFound() {
  return (
    <div>
      <img className="notfound_img" src="/notfound.png"></img>
      <span className="notfound_msg">잘못된 접근입니다.</span>
    </div>
  );
}

export default NotFound;
