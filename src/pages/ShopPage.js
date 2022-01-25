import React, { useState, useEffect } from "react";
import "../App.css";
import ItemList from "../components/ItemList";
import Modal from "../components/Modal";

const emptyForm = {
  name: "",
  price: "",
};

function ShopPage() {
  const [formInput, setFormInput] = useState(emptyForm);
  const [items, setItems] = useState([]);
  const [view, setView] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  /**
   * Recommendation:
   * Put your useEffect closer to the JSX becuase they are more related to the actions that happen AFTER the JSX renders instead of happening BEFORE the componetn load.
   */
  useEffect(() => {
    getLocalItems();
  }, []);

  useEffect(() => {
    handleFilter();
    saveLocalItems();
  }, [items, view]);

  // This looks quite clean and easy to read congrats!
  // You can even move this piece of code out of here (extract) to make this file shorter and better structured
  const handleFilter = () => {
    switch (view) {
      case "completed":
        setFilteredItems(items.filter((item) => item.completed === true));
        break;
      case "uncompleted":
        setFilteredItems(items.filter((item) => item.completed === false));
        break;
      default:
        setFilteredItems(items);
        break;
    }
  };

  const saveLocalItems = () => {
    localStorage.setItem("items", JSON.stringify(items));
  };

  const getLocalItems = () => {
    if (localStorage.getItem("items") === null) {
      localStorage.setItem("items", JSON.stringify([]));
    } else {
      let itemLocal = JSON.parse(localStorage.getItem("items"));
      setItems(itemLocal);
    }
  };

  const handleView = (event) => {
    setView(event.target.value);
  };

  return (
    <div className="shop-Page">
      <h1>Shopping list</h1>

      <ItemList
        items={items}
        setItems={setItems}
        filteredItems={filteredItems}
      />

      {/* Redudant CSS -1, you don't need to wrap your button on a div */}
      {/* You can style and position your button directly withouth a extra tag */}
      <div className="shop-Button">
        <button className="submit-Button" onClick={() => setOpenModal(true)}>
          Add item
        </button>
      </div>

      {openModal && (
        // If you need to pass not 1 or 2 but 3 setters (setFormInput,setItems,setOpenModal) is a sign/code smell that you need to refactor
        <Modal
          formInput={formInput}
          setFormInput={setFormInput}
          items={items}
          setItems={setItems}
          setOpenModal={setOpenModal}
        />
      )}

      <div className="shop-Select">
        <label htmlFor="View">View</label>
        {/* valid CSS This br can be replaced with <select> display:inline-block to move to the next line */}
        <br />
        <select name="items-filter" onChange={handleView}>
          <option value="">Select Tasks</option>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  );
}

export default ShopPage;
