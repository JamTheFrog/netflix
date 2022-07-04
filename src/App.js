import Navbar from "./components/Navbar";
import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="overflow-auto">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
