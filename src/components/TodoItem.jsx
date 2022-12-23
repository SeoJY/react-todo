import React from 'react';

export default function TodoItem(props) {
    const { todo, onUpdate, onDelete } = props;
    const { text, status } = todo;
    const handleChange = (e) => {
        onUpdate({...todo, status: e.target.checked ? 'completed' : 'active'})
    }
    const handleDelete = (e) => {
        onDelete(todo)
    }

    return (
        <li>
            <input type="checkbox" id={`checkbox`+todo.id} checked={status === 'completed'} onChange={handleChange}/>
            <label>{text}</label>
            <button type="button" onClick={handleDelete}>삭제</button>
        </li>
    );
}

