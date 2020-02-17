import React from 'react'

// It's late already, and I don't have enough time to write test for the dark theme >..<
const themes = {
  dark: {
    backgroundColor: 'black',
    color: 'white'
  },
  light: {
    backgroundColor: 'white',
    color: 'black'
  }
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {}
};
const ThemeContext = React.createContext(initialState);

// eslint-disable-next-line react/prop-types
function ThemeProvider({ children }) {
  const [dark, setDark] = React.useState(false); // Default theme is light

  // On mount, read the preferred theme from the persistence
  React.useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    setDark(isDark)
  }, [dark]);

  const toggle = () => {
    const isDark = !dark
    localStorage.setItem('dark', JSON.stringify(isDark));
    setDark(isDark)
  };

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
