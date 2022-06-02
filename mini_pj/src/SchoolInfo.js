import { useEffect } from "react";

const SchoolInfo = ({ setQuery }) => {
 useEffect(() => {
  setQuery({ ATPT_OFCDC_SC_CODE: "C100" });
 }, []);
 return (
  <div>
   <div>Header</div>
   <div>Boody</div>
   <div>Footer</div>
  </div>
 );
};
export default SchoolInfo;
