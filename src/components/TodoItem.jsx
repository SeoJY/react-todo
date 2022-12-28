import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function TodoItem(props) {
  const { todo, onUpdate, onDelete } = props;
  const { text, status } = todo;
  const handleChange = (e) => {
    onUpdate({ ...todo, status: e.target.checked ? 'completed' : 'active' });
  };
  const handleDelete = (e) => {
    onDelete(todo);
  };

  return (
    <li>
      <input
        type='checkbox'
        id={`checkbox` + todo.id}
        checked={status === 'completed'}
        onChange={handleChange}
        className='inp_chk'
      />
      <label htmlFor={`checkbox` + todo.id}>{text}</label>
      <button type='button' className='btn_delete' onClick={handleDelete}>
        <FaTrash />
      </button>
    </li>
  );
}
