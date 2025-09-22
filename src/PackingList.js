import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ data, setItem }) {
  const [sortBy, setSortBy] = useState("input");
  let tempItems;
  function handleSortInput() {
    tempItems = data;
  }
  function handleSortAlpha() {
    tempItems = data.slice().sort((a, b) => a.description.localeCompare(b.description));
  }
  function handleSortPacked() {
    tempItems = data.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  function handleClear() {
    const confirmed = window.confirm('Are you sure?');

    if (confirmed) setItem([]);
  }


  if (sortBy === "input") {
    handleSortInput();
  }
  else if (sortBy === "description") {
    handleSortAlpha();
  }
  else if (sortBy === "packed") {
    handleSortPacked();
  }

  //console.log(data)
  return <div className="list">
    <ul>
      {tempItems.map((item) => (
        //console.log(item)
        <Item key={item.id} item={item} setItem={setItem} />
      ))}
    </ul>
    <div className="actions">
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort Alphabetically</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button onClick={handleClear}>Clear List</button>
    </div>
  </div>;
}
