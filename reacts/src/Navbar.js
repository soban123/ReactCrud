import React, { useEffect } from "react";
import './Navbar.css';

import { 
    Link
     } from "react-router-dom";



       function Nav (props)  {

         const logout = () =>{

          localStorage.removeItem('login');
         
         }

       useEffect( ()=>{

        console.log(props)
       }
        )

         return (       <div className="container2">
          
          <h1 style={{ color : "orange" }} > Admin Panel  </h1>
          
          <Link className="headitems" to='/' >  
          <button  className="btn btn-danger" onClick={ logout } > Logout </button>  
           </Link>
          <div className='headitems' > 
          <input  type='text' placeholder='search' onKeyUp={ (e)=> {props.state(e)  } }  />
      
          </div> 
          
          
          </div>
            )
               

       }

 

     export default Nav ;