import React from 'react';



const Item = ({ todo, index, handleRemoveClick, handleItemClick }) => (
    <div className = "todo">
        <label className={todo.isCompleted ? "strike-through" : "" } onClick={() => handleItemClick(index)}>{todo.text}</label>
        <input type="checkbox" checked={todo.isCompleted} onChange={!todo.isCompleted}></input>
        <button class="remove" onClick={() => handleRemoveClick(index)}>Delete</button>
    </div>
);

export default Item;