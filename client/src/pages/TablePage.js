import React, { useEffect } from "react";
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Sidbar from '../components/Sidbar'
import Table from './Table'
import { useNavigate } from 'react-router-dom';
import { useAuth, useNotification } from "../hooks";



export default function TablePage() {
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
    
     <Navbar/>
     <Sidbar/>
     <Card/> 
    <Table/>  
   </>
  )
}
