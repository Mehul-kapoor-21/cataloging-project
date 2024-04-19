import React, { useEffect } from "react";
import Card from "../components/Card";
import Chart from "../components/Chart";
import Navbar from "../components/Navbar";
import Sidbar from "../components/Sidbar";
import { useNavigate } from 'react-router-dom';
import { useAuth, useNotification } from "../hooks";

export default function Chartp() {
  const { isLoggedIn} = useAuth();  
  const navigate=useNavigate();
  const { updateNotification } = useNotification(); 
  useEffect(() => {
    if (!isLoggedIn){
      updateNotification("error","Please Login to continue");
      navigate("/sign-in");
    } 
  }, [isLoggedIn]);
  return (
    <>
      <Navbar />
      <Sidbar />
      <Card />
      <Chart />
    </>
  );
}
