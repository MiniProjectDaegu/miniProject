import React from "react";
import { Link, useParams } from "react-router-dom";
import "./View.css";

function View() {
  //시도코드, 학교코드 받아서 api접근

  const day = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <div className="view_container">
      <select className="view_month" name="month">
        <option value="1월">1월</option>
        <option value="2월">2월</option>
      </select>

      <table>
        <tr>
          {day.map((item, idx) => (
            <th key={item + idx}>{item}</th>
          ))}
        </tr>
        <tr>
          <td>고순조</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <select className="view_time" name="list">
        <option value="조식">조식</option>
        <option value="중식">중식</option>
        <option value="석식">석식</option>
      </select>
    </div>
  );
}

export default View;
