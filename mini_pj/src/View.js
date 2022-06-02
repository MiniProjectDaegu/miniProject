import React from "react";
import { Link, useParams } from "react-router-dom";
import "./View.css";

function View() {
  //시도코드, 학교코드 받아서 api접근

  const day = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <div className="view_container">
      <div className="view_select">
        <select className="view_month" name="month">
          <option value="1월">1월</option>
          <option value="2월">2월</option>
        </select>
        <h1>오늘의 식단</h1>
        <select className="view_time" name="list">
          <option value="조식">조식</option>
          <option value="중식">중식</option>
          <option value="석식">석식</option>
        </select>
      </div>
      <div className="view_div">
        <img className="view_img" src="/sick.png"></img>
        <table className="view_table">
          <thead>
            <tr>
              <th>6월2일</th>
            </tr>
            <tr>
              <th>목요일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <li>고순조</li>
                <li>명순조</li>
                <li>된장국</li>
              </td>
            </tr>
          </tbody>
          {/* <thead>
            <tr>
              {day.map((item, idx) => (
                <th key={item + idx}>{item}</th>
              ))}
            </tr>
          </thead>
          <thead>
            <tr>
              {day.map((item, idx) => (
                <th key={item + idx}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody> */}
        </table>
        <img className="view_img" src="/sick.png"></img>
      </div>
    </div>
  );
}

export default View;
