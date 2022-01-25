import React from "react";

const Item = ({ itemName, itemPrice, item, items, setItems }) => {
  const handleDelete = () => {
    setItems(items.filter((element) => element.id !== item.id));
  };

  const handleComplete = () => {
    setItems(
      items.map((element) => {
        if (element.id === item.id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element;
      })
    );
  };

  return (
    <div className="item">
      <button className="complete-btn" onClick={handleComplete}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
      <li className={`item-row ${item.completed ? "completed" : ""}`}>
        {itemName}, {itemPrice}
      </li>
    </div>
  );
};

export default Item;
