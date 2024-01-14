import React, { useState, useContext } from 'react';
import ThemeContext from './ThemeContext';

const lightTheme = {
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
};

const darkTheme = {
  backgroundColor: '#000000',
  textColor: '#FFFFFF',
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme); // Default to light mode

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
