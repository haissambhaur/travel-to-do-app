import { useState } from "react";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
import { Logo } from "./Logo";

export default function App(){
  const [item, setItem] = useState([])
  return <div className="app">
    <Logo/>
    <Form items = {item} setItem = {setItem}/>
    <PackingList data={item} setItem = {setItem}/>
    <Stats items = {item}/>
  </div>
}


