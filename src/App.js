import './assets/css/style.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DardModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed']
function App() {
  const data = [
    {
        id: 0,
        text: '공부하기',
        status: 'active'
    },
    {
        id: 1,
        text: '장보기',
        status: 'complete'
    }
]
  const [todoData, setTodoData] = useState(data);
  const [filter, setFilter] = useState(filters[0])

  const handleAdd = (todo) => {
    const newArray = [...todoData, { id: uuidv4(), text: todo, status: 'active'}];
    setTodoData(newArray);
  }

  const handleUpdate = (updated) => {
    setTodoData(todoData.map((t) => t.id === updated.id ? updated : t));
  }

  const handleDelete = (deleted) => {
    setTodoData(todoData.filter((t) => t.id !== deleted.id));
  }


  return (
    <DardModeProvider>
      <div className="wrap">
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
        <TodoList todoData={todoData} filter={filter} onUpdate={handleUpdate} onDelete={handleDelete} />
        <TodoAdd handleAdd={handleAdd} />
      </div>
    </DardModeProvider>
  );
}

export default App;
