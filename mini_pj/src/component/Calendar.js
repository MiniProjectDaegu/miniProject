import "./calendar.css";
import { useState } from "react";
import moment from "moment";

const Calendar = () => {
  const [getMoment, setMoment] = useState(moment());

  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day"); //d로해도되지만 직관성

              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  <td key={index} style={{ backgroundColor: "hotpink" }}>
                    <div className="cal_day">{days.format("D")}</div>
                    <div style={{ fontSize: "2.8vh" }}>
                      <div>불고기필라프</div>
                      <div>미소된장국</div>
                      <div>사과치커리무침</div>
                      <div>배추김치</div>
                      <div>수박</div>
                      <div>크리미블랙슈</div>
                    </div>
                  </td>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  <td key={index} style={{ backgroundColor: "#FFF56E	" }}>
                    <span className="cal_day">{days.format("D")}</span>
                  </td>
                );
              } else {
                return (
                  <td key={index}>
                    <span className="cal_day">{days.format("D")}</span>
                  </td>
                );
              }
            })}
        </tr>
      );
    }
    return result;
  };
  const day = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="cal">
      <img className="cal_left_img" src="/run.png"></img>
      <table className="cal_table">
        <thead>
          <tr>
            <th colSpan="7">영광고등학교</th>
          </tr>
          <tr>
            <th>영광고등학교</th>
          </tr>
        </thead>
        <tbody>{calendarArr()}</tbody>
      </table>
      <img className="cal_right_img" src="/sick.png"></img>
    </div>
  );
};
export default Calendar;
