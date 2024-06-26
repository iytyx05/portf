import React, { createContext, useContext } from 'react'
import { API } from '../../assets/helpers/const'
import axios from 'axios'
const userContext = createContext()
export const useUser = () => useContext(userContext)

const UserContextProvider = ({children}) => {
    // ! CREATE 
    const addUser = async (newUser) => {
        await axios.post(API, newUser)
    }




    const values = {
        addUser,
    }
  return (
    <userContext.Provider value={values}>
      {children}
    </userContext.Provider>
  )
}

export default UserContextProvider
