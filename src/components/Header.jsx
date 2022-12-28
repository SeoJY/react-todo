import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function Header(props) {
  const { filters, filter, onFilterChange } = props;
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className='header'>
      <button type='button' className='btn_darkmode' onClick={toggleDarkMode}>
        {darkMode ? <HiSun /> : <HiMoon />}
      </button>
      <ul className='filter_list'>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              type='button'
              onClick={() => onFilterChange(value)}
              className={`filter ${filter === value ? 'is_selected' : ''}`}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
