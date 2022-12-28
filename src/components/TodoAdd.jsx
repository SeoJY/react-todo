import React, { useState } from 'react';

export default function TodoAdd({ handleAdd }) {
  const [todo, setTodo] = useState('');
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      handleAdd(todo.trim());
    }
    setTodo('');
  };
  return (
    <form className='add_area' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='할 일을 입력해 주세요'
        value={todo}
        onChange={handleChange}
        className='inp_txt'
      />
      <button type='submit' className='btn_add'>
        ADD
      </button>
    </form>
  );
}
