import React , {useState,useEffect} from 'react';
import Nav from './Navbar'
import { Table } from 'reactstrap';

const UserProfile = () => {

    let [ userData , setData  ] = useState([]) ;

   const handleDelete = ( id ) =>{
      console.log(id);
      fetch('http://localhost/mamdani/tets.php/?id='+id , {
        method: 'delete',
        mode: 'cors' ,
        headers: { 'Content-Type': 'application/json' },
       
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data)
      });
    }

    useEffect ( () => {
        // Simple GET request using fetch
        fetch('http://localhost/mamdani/tets.php')
            .then(response => response.json())
            .then(data => setData( data ));
    },[])
        
    console.log(userData)
let array_users = userData.map( e => { 
    
    return    <tr>
         <td> {e.id}  </td>
        <td> {e.name} </td>
        <td> {e.email}</td>
        <td> {e.role}</td>
        <button className="btn btn-primary"  >  Update </button>
        <button className="btn btn-danger" onClick={ ()=>{handleDelete(e.id) }  }>  Delete </button>
     </tr>
    
     } )

    return <> 
    <Nav />
    <Table dark>
  
  <tr>
    <th>id</th>
    <th>First Name</th>
    <th>Email</th>
    <th> Role </th>
    <th> Action </th>

  
  </tr>
    {array_users}
     
    </Table> 
    </>
}

export default UserProfile;