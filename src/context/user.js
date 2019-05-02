import { createContext } from 'react';

export const user = {
  name: 'Guest',
  age: 18,
}

export const UserContext = createContext(user);