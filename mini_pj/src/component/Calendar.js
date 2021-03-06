import "./calendar.css";
import { useRef, useState } from "react";
import moment from "moment";
import { TodayMenu, MonthMenu } from "./DaysMenu";

const Calendar = ({ menu, date, schoolName }) => {
  let todayRef = 0;
  const today = moment(date);
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
                .add(index, "day");
              if (
                moment().format("YYYYMMDD") === days.format("YYYYMMDD") &&
                moment(date).format("MM") === days.format("MM")
              ) {
                todayRef = days.format("D");
                return (
                  <td key={index} style={{ backgroundColor: "hotpink" }}>
                    <div className="cal_day">{days.format("D")}</div>
                    <div style={{ fontSize: "1vw" }}>
                      <TodayMenu index={days.format("D")} menu={menu} />
                    </div>
                  </td>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  <td
                    key={index}
                    style={{ backgroundColor: "rgb(211, 187, 191)" }}
                  >
                    <span className="cal_day">{days.format("D")}</span>
                  </td>
                );
              } else {
                return (
                  <td key={index}>
                    <span className="cal_day">{days.format("D")}</span>
                    {/* <span>{days.format("D")}</span> */}
                    <MonthMenu index={days.format("D")} menu={menu}></MonthMenu>
                  </td>
                );
              }
            })}
        </tr>
      );
    }
    return result;
  };

  const days = ["???", "???", "???", "???", "???", "???", "???"];

  return (
    <div className="cal">
      <table className="cal_table">
        <thead>
          <tr>
            <th colSpan="7" style={{ fontSize: "3.7vh" }}>
              {schoolName}
            </th>
          </tr>
          <tr>
            {days.map((day, idx) =>
              day === "???" || day === "???" ? (
                <th style={{ color: "gold" }} key={day + idx}>
                  {day}
                </th>
              ) : (
                <th key={day + idx}>{day}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>{calendarArr()}</tbody>
      </table>
    </div>
  );
};
export default Calendar;
