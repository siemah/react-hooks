import React from 'react';
import './App.css';
import Button from './components/Button'
import { ThemeContext, themes } from './context/theme'
import { UserContext, } from './context/user'

const Block = (props) => {
  return (
    <div className='block'>
      <Button />
    </div>
  )
}
class App extends React.Component {
 
  constructor(props) {
    super(props);
    const toggleTheme = () => {
      this.setState(prevS => ({
        theme:
          prevS.theme === themes.dark
            ? themes.light
            : themes.dark
      }))
    }
    this.state = {
      theme: themes.light,
      toggleTheme,
      user: {
        name: "siemah"
      }
    }
    
  }

  changeName = ({ target }) => this.setState({user: {name: target.value}})

  render (){
    return (
      <div className="App">
        <header className="App-header">
          <ThemeContext.Provider value={this.state}>
            <UserContext.Provider value={this.state.user}>
              <Block />
            </UserContext.Provider>
          </ThemeContext.Provider>
          <input placeholder='change the name' onChange={this.changeName} />
        </header>
      </div>
    );
  }
}

App.contextType = ThemeContext;

export default App;
