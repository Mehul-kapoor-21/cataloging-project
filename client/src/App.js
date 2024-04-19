import React from "react";
import {Routes, Route } from "react-router-dom";
import Chartp from "./pages/Chart";
import TablePage from "./pages/TablePage";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import "./App.css";
import SignIn from "./pages/SignIn";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/SignUp";
import { useAuth } from "./hooks";


export default function App() {
  const {authInfo} = useAuth() 
  const isAdmin = authInfo.profile?.role === 'admin'
  return (
    <> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chartp />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<Signup />} />
          {/* <TableDetailPage/> */}
        </Routes>
        <Toaster/>
    </>
  );
}
