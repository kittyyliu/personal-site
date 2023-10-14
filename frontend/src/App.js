import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;