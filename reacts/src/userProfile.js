import React , {useState,useEffect} from 'react';
import Nav from './Navbar'
import { Table } from 'reactstrap';

const UserProfile = (props) => {

    let [ userData , setData  ] = useState([]) ;

    useEffect ( () => {
        // Simple GET request using fetch
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setData( data ));
    },[])
        
    console.log(userData)
let array_users = userData.map( (e,i) => { 
    
    return    <tr>
         <td> {e.id}  </td>
        <td> {e.name} </td>
        <td> {e.email}</td>
        <td> {e.address.street}</td>
     </tr>
    
     } )

    return <> 
    <Nav />
    <Table dark>
  
  <tr>
    <th>id</th>
    <th>First Name</th>
    <th>Email</th>
    <th> Address </th>
  
  </tr>
    {array_users}
     
    </Table> 
    </>
}

export default UserProfile;