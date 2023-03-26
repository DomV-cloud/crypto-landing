import React from "react";
import Home from "./pages/Home";
import Place from "./pages/Place";
import Program from "./pages/Program";
import Contact from "./pages/Contact";


import { BrowserRouter as Router, Switch, Route,Routes } from "react-router-dom";

function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place" element={<Place />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>

   </div>
  );
}

export default App;
