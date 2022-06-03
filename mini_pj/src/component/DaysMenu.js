export function TodayMenu({ index, menu }) {
 return (
  <div>
   {menu[index - 1] &&
    menu[index - 1].map((todayMenu, idx) => {
     if (idx !== 0) {
      return <div key={todayMenu + idx}>{todayMenu}</div>;
     }
    })}
  </div>
 );
}
export function MonthMenu({ index, menu }) {
 return (
  <div>
   {menu[index - 1] &&
    menu[index - 1].map((todayMenu, idx) => {
     if (idx !== 0) {
      return (
       <div style={{ fontSize: "1.3vw" }} key={todayMenu + idx}>
        {todayMenu}
       </div>
      );
     }
    })}
  </div>
 );
}
