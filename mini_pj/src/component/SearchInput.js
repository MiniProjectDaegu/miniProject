import "../page/Search.css";
function SearchInput({ schoolType, inputRef }) {
 return (
  <div>
   <input
    className="searchForm"
    type="text"
    placeholder={`${schoolType}를 검색하세요`}
    ref={inputRef}
   ></input>
  </div>
 );
}
export default SearchInput;
