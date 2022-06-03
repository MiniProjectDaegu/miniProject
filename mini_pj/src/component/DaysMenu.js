export function TodayMenu({ index, menu }) {
  return (
    <div>
      {menu[index - 1].map((todayMenu, idx) => {
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
      {menu[index - 1].map((todayMenu, idx) => {
        if (idx !== 0) {
          return <div key={todayMenu + idx}>{todayMenu}</div>;
        }
      })}
    </div>
  );
}
// export default TodayMenu;
