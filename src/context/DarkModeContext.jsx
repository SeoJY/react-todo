import { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();

export function DardModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        updateDarkMode(!darkMode);
    };

    useEffect(() => {
        const isDark = localStorage.theme === 'dark';
        setDarkMode(isDark);
        updateDarkMode(isDark);
    },[]);

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

function updateDarkMode(darkMode) {
    if(darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
}

export const useDarkMode = () => useContext(DarkModeContext);
