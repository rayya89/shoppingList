import React, { useState, useEffect } from "react";
import '../App.css';
import ItemList from '../components/ItemList';
import Modal from '../components/Modal';

const emptyForm = {
  name: "",
  price: "",
};

function ShopPage() {

  const [formInput,setFormInput] = useState(emptyForm);
  const [items, setItems] = useState([]);
  const [view, setView] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  
  useEffect(() => {
    getLocalItems();
  },[]);

  useEffect(() => {
      handleFilter();
      saveLocalItems(); 
  }, [items, view]);



  const handleFilter = () => {
    switch(view){
      case 'completed':
        setFilteredItems(items.filter(item => item.completed === true))
        break;
      case 'uncompleted':
        setFilteredItems(items.filter(item => item.completed === false))
        break;
      default:
        setFilteredItems(items);
        break;
    }
  }

  const saveLocalItems = () => { 
      localStorage.setItem("items", JSON.stringify(items));
  }

  const getLocalItems = () => {
    if(localStorage.getItem("items") === null) {
    localStorage.setItem("items", JSON.stringify([]));
    } else {
     let itemLocal = JSON.parse(localStorage.getItem("items"));
     setItems(itemLocal);
    };
  }


  const handleView = event => {
    setView(event.target.value);
}    

  return (
    <div className="shop-Page">

        <h1>Shopping list</h1>

        <ItemList items={items} setItems={setItems} filteredItems={filteredItems}/>

        <div className="shop-Button">
            <button 
            className="submit-Button"
            onClick={() => setOpenModal(true)}
            >
            Add item
            </button>
        </div>

          { openModal &&
          <Modal 
            formInput={formInput} 
            setFormInput={setFormInput}  
            items={items} 
            setItems={setItems}
            setOpenModal={setOpenModal}
            />
          }


        <div className="shop-Select">
            <label htmlFor="View">View</label>
            <br />
            <select  name="items-filter" onChange={handleView}>
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
