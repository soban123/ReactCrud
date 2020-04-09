import React , { useState } from 'react';

import {  FormGroup   } from 'reactstrap';
import { Link } from 'react-router-dom'

import './App.css';

 
function Login() {

  let [pass, setPass] = useState('');
  let [email, setEmail] = useState('');
  let [ loggedIn , setLogedIn ] = useState('True') ;
   const handleSubmit = (event) =>
  {
    event.preventDefault();
   let obj = {
     email,
     pass
   }
   fetch('http://myapp144.herokuapp.com/users', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data)
  });
  
  } 

  return (
    <div>
    
    <form className="App cls text-center" onSubmit={ handleSubmit } >
      <div className="sets">
      <h1 >   Login : </h1><br/>

      <FormGroup className="set">
      <label >   Email  </label> <br/>
      <input type="email" size="20"  placeholder=" example@email.com" value={email} onChange={ (event) => { setEmail(event.target.value) }  } >
       </input>
       </FormGroup>

       <FormGroup className="set">
      <label >  password  </label><br/>
      <input type="password" size="20" placeholder=" ********"  value={pass} onChange={ (event) => { setPass(event.target.value) } }>
       </input>
      </FormGroup>


         <Link to="/profile"  > <button  className="btn  btn-primary "type="submit" > Login  </button></Link>
       <br></br>
       <br></br>
      <Link to='/signup'>  <button  className="btn  btn-primary ">   SignUp  </button></Link>
    </div>
    </form>
    
    </div>
  );
}

export default Login;
