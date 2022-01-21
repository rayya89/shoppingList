import React from 'react';

const Modal = ({ nameInput, setNameInput, priceInput, setPriceInput, items, setItems, setOpenModal }) => {
    

    const handleNameChange = event => {
        setNameInput(event.target.value);
    }

    const handlePriceChange = event => {
        setPriceInput(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault(); 
        setItems([
            ...items,
            {itemName: nameInput, itemPrice: priceInput, completed: false, id: Math.floor(Math.random() * 10000)}
            ]);
        setNameInput('');
        setPriceInput('');
        setOpenModal(false);
    }

        
    return (
        <div className="bg-Modal">
            <div className="modal-Container">
                <div className="close-Button">
                    <button onClick={() => setOpenModal(false)}>+</button>
                </div>
                <div className="modal-Title">
                    <h1>Add Your Item here:</h1>
                </div>
                <div className="modal-Body">
                    <form>
                    <input
                        type= "text"
                        placeholder= "Add item name"
                        value={nameInput}
                        name="item"
                        className="item-input"
                        onChange={handleNameChange}
                    />
                    <input
                        type= "text"
                        placeholder= "Add item price"
                        value={priceInput}
                        name="price"
                        className="item-input"
                        onChange={handlePriceChange}
                    />

                    <button className="submit-Button" type="submit" onClick={handleSubmit}> 
                        Add
                    </button>
                    
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Modal
