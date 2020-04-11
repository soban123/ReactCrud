import React , {useState,useEffect} from 'react';
import Nav from './Navbar'
import { Table } from 'reactstrap';

const UserProfile = () => {

    let [ userData , setData  ] = useState([]) ;
    let [ searchData , setSearch  ] = useState([]) ;
    let [ isSearch , setisSearch  ] = useState(false);
    


    const handlesearch = (event) =>{
      
      let arr = []
       arr = userData.filter( e => e.name.includes(event.target.value  )  )
      setSearch(arr);
      setisSearch(true)
     }

   const handleDelete = ( id ) =>{
      
      fetch('http://localhost/mamdani/tets.php/?id='+id , {
        method: 'delete',
        mode: 'cors' ,
        headers: { 'Content-Type': 'application/json' },
       
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        
      });
      window.location.reload();
    }

    useEffect ( () => {
        // Simple GET request using fetch
        fetch('http://localhost/mamdani/tets.php')
            .then(response => response.json())
            .then(data => setData( data )    );
    },[])

    const  handleArr = (data) =>{

     return data.map( e => { 
    
        return    <tr>
             <td> {e.id}  </td>
            <td> {e.name} </td>
            <td> {e.email}</td>
            <td> {e.role}</td>
            <button className="btn btn-primary"  >  Update </button>
            <button className="btn btn-danger" onClick={ ()=>{handleDelete(e.id) }  }>  Delete </button>
         </tr>
        
         } ) 
    }
        
    console.log(userData)
let array_users =  !isSearch  ?  handleArr(userData)  : handleArr(searchData);

    return <> 
    <Nav  state={ handlesearch  }  />
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