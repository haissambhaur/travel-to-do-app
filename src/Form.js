import { useState } from "react";

export function Form({ items, setItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleAddItems(newItem) {
    setItem((items) => [...items, newItem]);
  }



  function handlingSubmmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false
    };
    // console.log(newItem)
    handleAddItems(newItem);


    setDescription("");
    setQuantity(1);
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
    <select value={quantity} onChange={(e) => {
      console.log(Number(e.target.value));
      setQuantity(Number(e.target.value));
    }}>
      {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
        <option key={num} value={num}>
          {num}
        </option>
      ))}
    </select>
    <input
      type="text"
      placeholder="item..."
      value={description}
      onChange={(e) => {
        // console.log(e.target.value);
        setDescription(e.target.value);
      }} />
    <button>Add</button>
  </form>;

}
