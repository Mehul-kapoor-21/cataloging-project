import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chartp from "./pages/Chart";
import TablePage from "./pages/TablePage";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import "./App.css";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chartp />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/profile" element={<Profile />} />
          {/* <TableDetailPage/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
