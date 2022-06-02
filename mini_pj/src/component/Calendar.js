import "../View.css";

function Calendar({ today }) {
  const day = ["월", "화", "수", "목", "금", "토", "일"];
  console.log(today);

  return (
    <table>
      <thead>
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
          <td>고순조</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
export default Calendar;
