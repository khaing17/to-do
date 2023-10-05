import React from "react";

export default function Stats({ items }) {
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding items to your packing list.</em>
      </p>
    );

  return (
    <footer className="stats">
      {percentage === 100
        ? `You already packed everything! Ready to go!!`
        : ` You have ${numItem} items on your list, you've already packed ${numPacked}(
      ${percentage}% left)`}
    </footer>
  );
}
