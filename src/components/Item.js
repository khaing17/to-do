import React from "react";

export default function Item({ item, onDeleteItems, onTogglePacked }) {
  return (
    <li className="">
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => onTogglePacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
