import React , { useState,history,useEffect } from 'react';
import UserProfile from './userProfile'
import {  FormGroup   } from 'reactstrap';
import { Link } from 'react-router-dom'

import './App.css';

 
function Login(props) {

  let [pass, setPass] = useState('');
  let [email, setEmail] = useState('');
  let [ loggedIn , setLogedIn ] = useState(false) ;
  
   const handleSubmit = (event) =>
  {
    event.preventDefault();
   let obj = {
     email,
     pass
   }
   
   fetch('http://localhost/mamdani/tets.php', {
    method: 'POST',
    mode: 'cors',
  
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    

    body: JSON.stringify(obj) //
  }).then(function(response) {
    return response.json();
  })
  .then(function(data) 
  {  if(data[0].role == "admin"){ 
    setLogedIn(true) ; 
    localStorage.setItem('login' , 'True');
  }else{
    console.log('inco')
  }
    } 
    )
    
  
  } 

  useEffect ( () => {
    
    let token =  localStorage.getItem('login' );
   if( token == "True"   ){
    props.history.push('/profile')
console.log(loggedIn)    }
  })

  return (   <div>
    
  
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


         
         <button  className="btn  btn-primary "type="submit" > Login  </button>
        
       <br></br>
       <br></br>
      <Link to='/signup'>  <button  className="btn  btn-primary ">   SignUp  </button></Link>
    </div>
    </form>
    
    </div>

      
    
  );
}

export default Login;
