import React from "react";
import './Navbar.css';

import { 
    Link
     } from "react-router-dom";


       function Nav ()  {

         const logout = () =>{

          localStorage.removeItem('login');
  
         }

         return (       <div className="container2">
          
          
          
          <Link className="headitems" to='/' >  
          <button  className="btn btn-danger" onClick={ logout } > Logout </button>  
           </Link>
          
          
          
          
          </div>
            )
               

       }

 

     export default Nav ;