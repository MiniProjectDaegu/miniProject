import { useEffect } from "react";
import { getATPTCode } from "../api/getATPTCode";
function ATPTCode() {
  useEffect(() => {
    const ATPTData = async () => {
      const data = await getATPTCode();
      console.log(data);
    };
    ATPTData();
  }, []);
}
export default ATPTCode;
