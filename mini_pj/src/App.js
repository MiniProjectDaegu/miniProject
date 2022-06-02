import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./Search";
import Home from "./Home";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path=':schoolType' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
