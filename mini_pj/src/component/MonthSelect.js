import { formMonth } from "./getMonth";
import "../page/View.css";
function MonthSelect({ months, setDate }) {
 return (
  <select
   className="view_month"
   name="month"
   onChange={(event) => {
    formMonth(event, setDate);
   }}
  >
   {months.map((month) => (
    <option key={month} value={month}>
     {month}
    </option>
   ))}
  </select>
 );
}
export default MonthSelect;
