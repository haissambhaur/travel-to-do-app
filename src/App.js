const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App(){
  return <div className="app">
    <Logo/>
    <Form/>
    <PackingList data={initialItems}/>
    <Stats/>
  </div>
}

function Logo(){
  return <h1>🌴Far Away</h1>
}

function Form(){
  return <form className="add-form">
    <h3>what do you need for your trip?</h3>
    <select>
      {Array.from({length:20}, (_,i)=>(
        <option key={i+1}>
          {i+1}
        </option>
      ))}
    </select>
    <input type="text" placeholder="item..."/>
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