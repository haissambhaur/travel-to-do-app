const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App(){
  return <div className="app">
    <Logo/>
    <Form/>
    <PakcingList/>
    <Stats/>
  </div>
}

function Logo(){
  return <h1>🌴Far Away</h1>
}

function Form(){
  return <div className="add-form">
    <h3>what do you need for your trip?</h3>
  </div>
  
}

function PakcingList(){
  return <div className="list">LIST</div>
}

function Stats(){
  return(
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  )
}