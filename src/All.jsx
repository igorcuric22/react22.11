import { useState } from "react";

let nextId=0;

function All({name}) {
   // const [name, setName] = useState('');
    const [items, setItems] = useState([]);
    const [check, setCheck] = useState(false);

    const prekrizi=(e)=>{
        let list=e.target.parentElement;
        console.log(list);
    
        let label=list.querySelector("span");
        console.log(label);
    
        if (e.target.checked){
            list.style.textDecoration="line-through";
          } else {
            list.style.textDecoration="none";
          }
    }

    return ( 
        <>
        <button onClick={() => {
            setItems([
              ...items,
              { id: nextId++, name: name ,kvaka:check}
            ]);
          }}>Add</button>
        <div className="posts">
        {items.map(item => (
          <div key={item.id}>
            
            <input
              type="checkbox"
              //checked={}
              onChange={e =>{ setCheck(e.target.checked);
                           console.log(e.target.checked);
                           item.kvaka=e.target.checked;
              }
              }
              onClick={prekrizi}
              />
            
           <span>{item.name}</span>
          
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
      </>
     );
}

export default All;