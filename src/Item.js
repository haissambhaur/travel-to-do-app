
export function Item({ item, setItem }) {
  function handleDeleteItems(id) {
    setItem((items) => items.filter(item => item.id !== id));
  }
  function handlePackedItems(id) {
    setItem((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item
    )
    );

  }
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => handlePackedItems(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.description} {item.quantity}</span>
      <button onClick={() => handleDeleteItems(item.id)}>❌</button>
    </li>
  );
}
