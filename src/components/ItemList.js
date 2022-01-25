import React from "react";
import Item from "./Item";

const ItemList = ({ items, setItems, filteredItems }) => {
  return (
    <div className="item-container">
      <ul>
        {filteredItems.map((item) => (
          <Item
            items={items}
            setItems={setItems}
            key={item.id}
            item={item}
            itemName={item.itemName}
            itemPrice={item.itemPrice}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
