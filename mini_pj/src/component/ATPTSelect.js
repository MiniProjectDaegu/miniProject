import "../page/Search.css";
function ATPTSelect({ setATPTCode, ATPTCodeList, onClick }) {
 return (
  <div className="search_select_main">
   <select
    className="search_select"
    name="city"
    onChange={(event) => {
     setATPTCode(event.target.value);
    }}
   >
    <option value="">시/도</option>
    {ATPTCodeList.map((ATPTCode) => (
     <option
      key={ATPTCode.ATPT_OFCDC_SC_CODE}
      value={ATPTCode.ATPT_OFCDC_SC_CODE}
     >
      {ATPTCode.ATPT_OFCDC_SC_NM}
     </option>
    ))}
   </select>
  </div>
 );
}
export default ATPTSelect;
