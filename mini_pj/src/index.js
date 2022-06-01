import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./Search";
import View from "./View";
import Home from "./Home";
import Main from "./Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Home />}></Route>
  //     <Route path="/search" element={<Search />} />
  //     <Route path="/view" element={<View />}>
  //       <Route index path=":value" />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/search">
          <Route index element={<Search />} />
        </Route>
        <Route path="/view" element={<View />} />
      </Route>
    </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
