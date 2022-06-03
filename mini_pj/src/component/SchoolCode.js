import { useEffect } from "react";
import { getATPTCode } from "../api/getATPTCode";
function ATPTCode() {
 useEffect(() => {
  const ATPTData = async () => {
   const data = await getATPTCode();
  };
  ATPTData();
 }, []);
}
export default ATPTCode;
