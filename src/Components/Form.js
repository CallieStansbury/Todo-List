import React, { useState } from 'react';

const Form = ({addTodo}) => {

    const [ value, setValue ] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!value) return;
        addTodo(value);
    }

    const handleOnChange = (event) => {
        setValue(event.target.value);
    }

    return(
        <form onSubmit={onFormSubmit}>
            <label className="form-label">
                Add task:
                <br />
                <input type="text" className="form-input" placeholder="Enter New Todo Item" value= {value} onChange= {handleOnChange} />
                <button className="add" OnClick={() => onFormSubmit}>Add</button>
            </label>
        </form>
    );
}

export default Form;