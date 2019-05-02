import React, { useState, useEffect, useContext } from 'react';
import './App.css'
import { ThemeContext, themes } from './context/theme'

const Button = ({children, ...rest}) => {

  const contextType = useContext(ThemeContext);
  return (
    <button 
      {...rest}
      onClick={contextType.toggleTheme} 
      style={{ backgroundColor: contextType.theme.background, color: contextType.theme.forground }}>
      {children}
    </button>
  )

}
const Block = props => <Button>theme name</Button>

const App = props => {
  
  
  const [ theme, setTheme ] = useState({
    theme: themes.light,
  });
  
  const toggleTheme = () => {
    setTheme({
      theme: 
        theme.theme === themes.light
          ? themes.dark
          : themes.light
    })
  }

  useEffect(() => {}, []);
  
  return (
    <div className="App">
      <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
        <Block />
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
