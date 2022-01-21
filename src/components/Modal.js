import React, {useState} from 'react';


    const Modal = ({ formInput, setFormInput, items, setItems, setOpenModal }) => {
    
        const emptyForm = {
            name: "",
            price: "",
          };

          const STATUS = {
            IDLE: "IDLE",
            SUBMITTED: "SUBMITTED",
            SUBMITTING: "SUBMITTING",
            COMPLETED: "COMPLETED",
          };

          const [status, setStatus] = useState(STATUS.IDLE);
          const errors = getErrors(formInput);
          const isValid = Object.keys(errors).length === 0;



    const handleChange = event => {
        setFormInput((curForm) => {
            return {
                ...curForm,
                [event.target.id]: event.target.value
            }
        }

        );}


    const handleSubmit = event => {
        event.preventDefault();
        setStatus(STATUS.SUBMITTING); 
        if (isValid) {
        setItems([
            ...items,
            {itemName: formInput.name, itemPrice: formInput.price, completed: false, id: Math.floor(Math.random() * 10000)}
            ]);
        setFormInput(emptyForm);
        setStatus(STATUS.COMPLETED); 
        setOpenModal(false); }
        else {
        setStatus(STATUS.SUBMITTED);}
    }


    function getErrors(formInput) {
        const result = {};
        if (!formInput.name) result.name="Name is required";
        if (!formInput.price) result.price="Price is required";
        return result;
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
                        value={formInput.name}
                        id="name"
                        className="item-input"
                        onChange={handleChange}
                    />

                    <input
                        type= "text"
                        placeholder= "Add item price"
                        value={formInput.price}
                        id="price"
                        className="item-input"
                        onChange={handleChange}
                    />  

                    <button className="submit-Button" type="submit" onClick={handleSubmit} disabled={status === STATUS.SUBMITTING}> 
                        Add
                    </button>

                    {!isValid && status === STATUS.SUBMITTED && ( 
                        <div className='error'>
                            <p>You have the following errors:</p>
                            <ul>
                                {Object.keys(errors).map((key) => {
                                return <li key={key}>{errors[key]}</li>;
                                })}
                            </ul>
                        </div>
                    )
                    }
                    
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Modal
