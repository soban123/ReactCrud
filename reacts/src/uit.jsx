import React, {useState} from 'react';

function InputBox(){

let [name, setName] = useState ("");
    return (



        <div>
            <input  
            type="text"
            value={name}
            name="enter name"
            onChange={ (event) => setName(event.target.value)  } 
            
              / >

                  <h1> {name}  </h1>


        </div>
    ) ;
}

export default InputBox ;