
import { useState } from 'react';
import "./App.css"


let nextId=0;

export default function App2() {
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);
  const [check, setCheck] = useState(false);
  const [filter,setFilter]=useState("all");

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

const all=()=>{
    console.log("all");
    setFilter("all");
}

const checked=()=>{
    console.log("checked");
    setFilter("checked");


    for(let i=0;i<items.length;i++)
    {
        console.log(items[i].id,' ',items[i].name,' ',items[i].kvaka);
    }
}

const notChecked=()=>{
    console.log("Not checked");
    setFilter("notChecked");
}

  return (
    <div className='app'>
      <h1>Todo Lista:</h1>
      <div><button onClick={all}>All</button><button onClick={checked}>Checked</button><button onClick={notChecked}>Not Checked</button></div>
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
      
      
      { filter==="all" && (<div className="posts">
        {items.map(item => (
          <div key={item.id}>
            
            <input
              type="checkbox"
              checked={item.kvaka}
              onChange={(e)=>{ setCheck(e.target.checked);
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
        
      </div>)}

      { filter==="checked" && (<div className="posts1">

           { items.filter(a=>a.kvaka===true).map(item => (
    <div key={item.id}>
      
      <input
        type="checkbox"
        checked={item.kvaka}
        onChange={(e)=>{ setCheck(e.target.checked);
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
  ))


           } 
        
        
        
        </div>)}
        
    { filter==="notChecked" && (<div className="posts2">
        

            
              { items.filter(a=>a.kvaka===false).map(item => (
    <div key={item.id}>
      
      <input
        type="checkbox"
        checked={item.kvaka}
        onChange={(e)=>{ setCheck(e.target.checked);
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
  ))


           } 
            
            
            
            
            </div>)}

    </div>
  );
}

