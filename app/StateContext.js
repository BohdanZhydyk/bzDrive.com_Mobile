import React, { createContext, useContext, useState } from 'react'


const StateContext = createContext();

export const StateProvider = ({ children }) => {

  const [bzToken, setBzToken] = useState(false)
  const [info, setInfo] = useState(false)
  const [nav, setNav] = useState(false)
  const [user, setUser] = useState(false)
  const [error, setError] = useState(null)

  const [isMenu, setIsMenu] = useState(false)

  return (
    <StateContext.Provider value={{
      bzToken, setBzToken,
      info, setInfo,
      nav, setNav,
      user, setUser,
      error, setError,
      isMenu, setIsMenu
    }}>

      {children}

    </StateContext.Provider>
  )
}

export const useAppState = () => { return useContext(StateContext) }
