import React from 'react'

import { ThemeContext } from '../context/theme';
import { UserContext } from '../context/user';

const Button = (props) => (
  <>
    <ThemeContext.Consumer>
      {
        ({theme, toggleTheme}) => (
          <UserContext.Consumer>
            {
              user => (
                <button 
                  {...props}
                  style={{backgroundColor: theme.background, color: theme.forground}}
                  onClick={toggleTheme}>
                  {user.name}
                </button>
              )
            }
          </UserContext.Consumer>
        )
      }
    </ThemeContext.Consumer>
  </>
)

export default Button


