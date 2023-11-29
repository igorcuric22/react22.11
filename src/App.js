import './App.css';
import { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { renderToString } from 'react-dom/server';
import parse from 'html-react-parser';
import React from 'react';

function App() {
  const [input, setinput] = useState([]);
  const [check, setCheck] = useState([]);
  const [ancheck, setAnCheck] = useState([]);
  const [value,setValue]=useState("");
  const [name,setName]=useState("");
  // const [checkx,setCheck]=useState(false);
  const [filter,setFilter]=useState("All");

  let i=0;
  
  var stringToHTML = function (str) {
    var dom = document.createElement('div');
    dom.innerHTML = str;
    return dom;
  };


  const obrisi=(objectx) => {
    console.log("obrisi",objectx,objectx.parentElement);
    var list=objectx.parentElement;
    console.log(list);
    objectx.parentElement.remove();
   
  }



  const prekrizi=(objectx) => {
    let list=objectx.parentElement;
    console.log(list);
    let i=input.indexOf(list);
    console.log('-----',i);
    let label=list.querySelector("span");
    console.log(label);

    if (objectx.checked){
      label.style.textDecoration="line-through";
    } else {
      label.style.textDecoration="none";
    }
  

    //setCheck(true);
  }

  const priti=() => {
    console.log(input);
    setinput([...input,<p><input type="checkbox" onClick={(e)=>{prekrizi(e.target)}}>
  </input><span>{name}</span><button onClick={(e)=>{obrisi(e.target)}}>X</button></p>]);
  }

  useEffect(()=>{

  },[])

  const all=()=>{
    console.log("All");
    setFilter("All");
  }

  let q;
  const checked=()=>{
    q=[];

    setFilter("Checked");


    for(let i=0;i<input.length;i++)
    {
      const htmlString= renderToString(input[i]);

      console.log(input[i]);
      console.log("----",htmlString);

      const stringtoHTML=stringToHTML(htmlString);

      console.log("------",stringtoHTML);

      if(stringtoHTML.querySelector("input").checked){
        console.log("true");
        q.push(stringtoHTML);
        //setCheck([...q,p[i].innerHTML]);
      }
      else
        console.log("false");

    }

    const p=document.querySelectorAll(".posts div p");
    for(let i=0;i<p.length;i++){
        console.log(p[i]);
        if(p[i].querySelector("input").checked){
          console.log("true");
          q.push(p[i].innerHTML);
          //setCheck([...q,p[i].innerHTML]);
        }
        else
          console.log("false");
     }

     console.log(q);
     setCheck(q);
  }

  let qq;
  const notChecked=()=>{
    console.log("Not checked");
    qq=[];

    for(let i=0;i<input.length;i++)
    {
      console.log(input[i]);
    }
    
    const p=document.querySelectorAll(".posts div p");
    for(let i=0;i<p.length;i++){
        console.log(p[i]);
        if(!p[i].querySelector("input").checked){
          console.log("true");
          qq.push(p[i].innerHTML);
          //setCheck([...q,p[i].innerHTML]);
        }
        else
          console.log("false");
     }

     console.log(qq);
     setAnCheck(qq);
    
    setFilter("notChecked");
  }


  return (
    <div className='app'>
      <div><button onClick={all}>All</button><button onClick={checked}>Checked</button><button onClick={notChecked}>Not Checked</button></div>
      <label>Unesi sto da radis:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button
        onClick={priti}
        onChange={(e) => setValue(e.target.value)} >
        append
      </button>
      
      <div className='posts'>
      { filter==="All" && (input.map((item) => {
        console.log(i);
        return <div key={i++} >{item}</div>
        }))
        }
      </div>

        <div className='checked'>
     { filter==="Checked" && (
        check.map((item=>{
          return <div>{parse(item)}</div>
        }
          
          ))
    )} 

    </div>


<div className='notChecked'>
{ filter==="notChecked" && (
        ancheck.map((item=>{
          return <div>{parse(item)}</div>
        }
         )
    ))}
    
    </div>

    </div>
  
  );
}

export default App;
