import { useEffect, useState } from 'react';
import "./App.css"

let nextId=0;

export default function App4() {
  const [name, setName] = useState('');
  let [items, setItems] = useState([]);
  const [check, setCheck] = useState(false);
  const [filter,setFilter]=useState("all");


const all=(e)=>{
    console.log("all");
    setFilter("all");

    
    document.querySelector(".active")?.classList.remove("active");
    e.target.classList.add("active");
}


const checked=(e)=>{
    console.log("checked");
    setFilter("checked");

    document.querySelector(".active")?.classList.remove("active");
    e.target.classList.add("active");

}

const notChecked=(e)=>{
    setFilter("notChecked");
    console.log("Not checked");

    document.querySelector(".active")?.classList.remove("active");
    e.target.classList.add("active");
}


const deleteFromArray = (array, value) => {
  let newArray = array.filter(item => item.kvaka=== value)
  return newArray;
}


const clearChecked=()=>{
  alert("Jesi li siguran");
  console.log("Clear checked");
  const itemsx = deleteFromArray(items,!true)
  setItems(itemsx);
  //items=[...itemsx];
  console.log('Changed array:', items);
}

useEffect(()=>{
console.log(items);
},[items])

  return (
    <div className="Main">
    <div className='app'>
      <h1>Todo Lista:</h1>
      <div><button className="buttons1" onClick={all}>All</button><button className="buttons2" onClick={checked}>Checked</button><button className="buttons3" onClick={notChecked}>Not Checked</button></div>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
       
      />

     <button onClick={() => {
        setItems([
          ...items,
          { id: nextId++, name: name ,kvaka:check}
        ]);
      }}>Add</button>
      
       <div className="posts">
        {items.filter(b=>{
            if(filter==="all") return true;
            else if(filter==="checked" && b.kvaka===true) return true;
            else if(filter==="notChecked" && b.kvaka===false) return true;
        }).map(item => (
          <div className="flex" key={item.id}>
            
            <input
              type="checkbox"
              checked={item.kvaka}
              onChange={e =>{ setCheck(!check);
                           console.log(e.target.checked);
                           item.kvaka=e.target.checked;
              }
              } />
              
            
           <span className={item.kvaka?"crta":""}>{item.name}</span>
          
          <button onClick={() => {
              setItems(
                items.filter(a =>
                  a.id!==item.id
                )
              );
            }}>
              Delete
            </button>
          
          
          </div>
        ))}
         </div>
  
            <p><a href="#" onClick={clearChecked}>Clear checked data</a> </p>
     
    </div>

    </div>
  );
}