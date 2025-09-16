import { useState } from "react";

// let initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

export default function App(){
  const [item, setItem] = useState([])
  return <div className="app">
    <Logo/>
    <Form items = {item} setItem = {setItem}/>
    <PackingList data={item}/>
    <Stats/>
  </div>
}

function Logo(){
  return <h1>🌴Far Away</h1>
}

function Form({items, setItem}){
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)
  
  function handlingSubmmit (e){
      e.preventDefault();
      
      if(!description) return;

      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false
      };
      // console.log(newItem)
      setItem([...items, newItem])

      setDescription("")
      setQuantity(1)
  }
  return <form className="add-form" onSubmit={handlingSubmmit}>
    <h3>what do you need for your trip?</h3>
    {/* <select>
      {Array.from({length:20}, (_,i)=>(
        <option key={i+1}>
          {i+1}
        </option>
      ))}
    </select> */}
    <select value={quantity} onChange={(e)=> {
      console.log(Number(e.target.value))
      setQuantity(Number(e.target.value));
    }}>
      {Array.from({length:20}, (_, i)=>i+1).map
      ((num) => (
        <option key={num} value={num}>
          {num}
          </option>
      ))}
    </select>
    <input 
      type="text" 
      placeholder="item..." 
      value={description} 
      onChange={(e)=>{
      // console.log(e.target.value);
      setDescription(e.target.value);}}/>
    <button>Add</button>
  </form>
  
}

function PackingList({data}){
  //console.log(data)
  return <div  className="list">
    <ul>
    {data.map((item)=>(
      //console.log(item)
      <Item key= {item.id} item= {item}/>
      
    ))}
  </ul>
  </div>
}

function Item({item}){
  return(
    <li >
      <span style={item.packed? {textDecoration: "line-through"} : {}}>{item.description} {item.quantity}</span>
      <button>❌</button>
      </li>
  )
}

function Stats(){
  return(
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  )
}