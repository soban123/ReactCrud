import React from "react";
import ReactDOM from 'react-dom';

import UserProfile from './userProfile' ;
import Login from './Login';
import { Route,
   Link,
    BrowserRouter as Router } from "react-router-dom";
import signup from './signup' ;



const CustomRoutes =  () =>(

  <Router>



<div>

{/* <Nav /> */}

<Route exact path='/' component={Login} />
<Route path='/signup' component={signup} />

 
 <Route path='/profile' component={UserProfile} />
 










</div>


  </Router>
  

)

export default  CustomRoutes;
