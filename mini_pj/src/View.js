import React from "react";
import { Link, useParams } from "react-router-dom";

function View() {
  const day = ["월", "화", "수", "목", "금", "토", "일"];
  const { value } = useParams();
  console.log({ value });
  return (
    <div>
      <Link to="/">
        <div>HOME</div>
      </Link>
      <div></div>
      <select name="month">
        <option value="1월">1월</option>
        <option value="2월">2월</option>
      </select>
      <select name="list">
        <option value="중식">중식</option>
        <option value="석식">석식</option>
      </select>
      <table>
        <tr>
          {day.map((item, idx) => (
            <th key={item + idx}>{item}</th>
          ))}
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
    </div>
  );
}

export default View;
