import React, { useState } from 'react';
import Item from './Item';
import Form from './Form';

const Todo = () => {
    const todoList = [
        {
            text: "Mow the lawn",
            isCompleted: false,
        },
        {
            text: "Walk the dog",
            isCompleted: false,
        },
        {
            text: "Do the dishes",
            isCompleted: false,
        }
    ];

    const [todos, setTodo] = useState(todoList);
    console.log(todos);

    const addTodo = (text) => {
       const newTodo = [...todos, { text, isCompleted: false }];
       setTodo( newTodo );
    }

    const handleItemClick = (index) => {
       const newTodo = [...todos];
       newTodo[index].isCompleted = !newTodo[index].isCompleted;
       setTodo(newTodo); 
    }

    const handleRemoveClick = (index) => {
       const newTodo = [...todos];
       newTodo.splice(index, 1);
       setTodo(newTodo);
    };

    console.log(todos);

    return(
        <div className="todo-container">
            <h2 className="main-heading">To Do List</h2>
            <Form addTodo={addTodo}/>
            <div>
            <br />
                {todos.length ? (todos.map((item, index) => (
                <Item key= {`${item.text}-${index}`} todo= {item} index= {index} handleRemoveClick={handleRemoveClick} handleItemClick={handleItemClick} />
                    ))
                ) : ''}
            </div>
        </div>
    );
};

export default Todo;