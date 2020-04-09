import React from "react";
import './Navbar.css';

import { 
    Link
     } from "react-router-dom";


       const Nav = () => (


        
<div className="container2">


<Link className="headitems" to='/adduser'>  Add User  </Link>
<Link className="headitems" to='/delete' >  Delete User   </Link>
<Link className="headitems" to='/Update ' >  Update User   </Link>




</div>
     )

     export default Nav ;