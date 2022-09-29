import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Contents from "./components/Contents";
import Detail from "./components/Detail"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contents />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
