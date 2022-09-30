import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Contents from "./components/Contents";
import Detail from "./components/Detail";
import Category from "./components/Category";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}/>
          <Route path="/Category/:cat" element={<Category />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Contents />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
