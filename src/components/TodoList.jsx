import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
    const { todoData, filter, onUpdate, onDelete } = props;

    const filtered = getFilteredItems(todoData, filter);

    const handleUpdate = (updated) => {
        onUpdate(updated)
    }
    const handleDelete = (deleted) => onDelete(deleted)

    return (
        <ul className="todo_list">
            {filtered.map((item) => (
                <TodoItem 
                    key={item.id}
                    todo={item}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                />
            ))}
        </ul>
    );
}

function getFilteredItems(todos, filter) {
    if(filter === 'all') {
        return todos;
    } else {
        return todos.filter(todo => todo.status === filter);
    }
}