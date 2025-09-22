export function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start Packing Pliss</em>
      </footer>
    );
  }

  function packPercentage() {
    const packedPerc = items.filter(item => item.packed === true).length;
    const totalItems = items.length;
    return totalItems === 0 ? "0" : (packedPerc / items.length) * 100;
  }
  return (
    <footer className="stats">
      <em>
        {Math.round(packPercentage()) === 100 ? "You got everything! Ready to go XD" : `You have ${items.length} items on your list, and you already packed ${Math.round(packPercentage())}%`}</em>
    </footer>
  );
}
