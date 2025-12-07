import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebaar from "./components/Sidebaar";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";
import Delete from "./pages/Delete";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Router>
        <div className="fixed left-0 top-0">
          <Sidebaar />
        </div>
        <div className="ml-[15%] w-[85%]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
