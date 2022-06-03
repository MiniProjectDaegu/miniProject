import "./App.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Search from "./page/Search";
import Home from "./page/Home";
import Main from "./page/Main";

function App() {
 const values = "element";
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Main />}>
     <Route index element={<Home />} />
     <Route path=":schoolType" element={<Search />}></Route>
    </Route>
   </Routes>
  </BrowserRouter>
 );
}

export default App;
