import React from 'react'
import Navbar from '../components/Navbarhome.js'
import Pricing from './Pricing'

export default function Home() {
  return (
    <>
     <Navbar/>  
    <div className='d-flex p-5'>
           
            <div class="d-flex flex-column align-items-center justify-content-center w-50 ">
                    <h2 class="fs-2 fw-bold fst-italic text-center"> Welcome to LOCO- Smart Inventory Manager</h2>
                    <p class="fs-3 text-center">Discover a smarter way to organize and explore with our innovative cataloging website. Simplify how you manage and access your collections effortlessly.</p>  
                   
                    
                <button class="btn btn-dark mx-5 btn btn-home"><a href="#plans "class="text-reset text-decoration-none">Browse Our Plans</a></button>
                    
                </div>
                <img className='img-fluid w-50' src="bann.jpg"></img>
        </div>
        <Pricing/>
    </>
  )
}
