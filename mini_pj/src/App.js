import "./App.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Search from "./Search";
import Home from "./Home";
import Main from "./Main";
import NotFound from "./NotFound";

function App() {
  const values = "element";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path=":schoolType" element={<Search />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
