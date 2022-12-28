import './assets/css/style.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DardModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
function App() {
  const readTodoFromLocalStorage = () => {
    const todos = localStorage.getItem('todoData');
    return todos ? JSON.parse(todos) : [];
  };

  const [todoData, setTodoData] = useState(readTodoFromLocalStorage);
  const [filter, setFilter] = useState(filters[0]);

  const handleAdd = (todo) => {
    const newArray = [
      ...todoData,
      { id: uuidv4(), text: todo, status: 'active' },
    ];
    setTodoData(newArray);
  };

  const handleUpdate = (updated) => {
    setTodoData(todoData.map((t) => (t.id === updated.id ? updated : t)));
  };

  const handleDelete = (deleted) => {
    setTodoData(todoData.filter((t) => t.id !== deleted.id));
  };

  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todoData));
  }, [todoData]);

  return (
    <DardModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList
        todoData={todoData}
        filter={filter}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
      <TodoAdd handleAdd={handleAdd} />
    </DardModeProvider>
  );
}

export default App;
