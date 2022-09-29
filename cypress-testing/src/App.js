import './App.css';
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';

function App() {
  // const [count,setCount]= useState(0);
   const [title,setTitle]= useState("");
   const [data,setData]= useState([]);

  const handleAdd =()=>{
    axios.post("http://localhost:8080/posts",{title:title,status:false}).then(()=>{
      getData()
      setTitle("")
    })
  }
  const getData =()=>{
    axios.get("http://localhost:8080/posts").then((res)=>{
      setData(res.data)
    })
  }
  useEffect(()=>{
   getData()
  },[])

  return (
    <div className="App">
      <h4>Ascyn Event and user Events</h4>
      {/* <h2>The count is {count}</h2> */}
      {/* <button className='addButton' onClick={()=>setCount(prev=>prev+1)}>Add</button> */}
      {/* <button className='reduceButton' onClick={()=>setCount(prev=>prev-1)}>Reduce</button> */}
      <input type="text" placeholder='Enter Task' onChange={(e)=>setTitle(e.target.value)} />
      <button onClick={handleAdd}>Add task</button>
      <div style={{margin:"auto"}}>
        {
          data?.map((items)=>(
            <div key={items.id} style={{width: "200px"
            ,display:"flex",justifyContent:"space-between",margin:"auto",alignItems:"center" }}>
              <li>{items.title}</li>
              <p>{items.status ?"Done":"Not Done"}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
