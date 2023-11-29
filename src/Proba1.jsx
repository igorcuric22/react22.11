import React, {useEffect, useState} from 'react'; 

let nextId=0;

function Proba1() { 
  
  const [checked, setChecked] = useState(false); 
  const [items,setItems]=useState([]);


  const handleChange = () => { 
    
    setChecked(!checked);
  }

  


  const unos=async ()=>{
    console.log("unos");

    setItems([
      ...items,
      { id:++nextId,kvaka:checked}
    ]);

    console.log(items);
  }
  

useEffect(()=>{
  console.log(nextId);
  
  
  
},[])

  return ( 
    
    <div> 
    
       <input type="checkbox" onChange={handleChange}></input>
       <br/>
       <button onClick={unos}>Stisni</button>
        
      <p>
        {checked ? 'Checked' : 'Not checked'}
      </p> 
    
    </div> 
    
  ); 
  
}; 

export default Proba1;