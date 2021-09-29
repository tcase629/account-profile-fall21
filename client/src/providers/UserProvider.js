import React, { useState, useEffect } from 'react';
import axios from 'axios';

// set up the initial context 
export const UserContext = React.createContext()

// creates a exportable consumer so we have access to the provider
export const UserConsumer = UserContext.Consumer;

// create provider , presentationl component 
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect( () => {
    axios.get('/api/users')
      .then( res => {
        setUser(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const updateUser = (id, user) => {
    axios.put(`/api/users/${id}`, { user })
      .then( res => {
        setUser(res.data)
      })
      .catch( err => console.log(err))
  }
  return (
    <UserContext.Provider value={{
      ...user, 
      updateUser: updateUser
    }}>
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider;