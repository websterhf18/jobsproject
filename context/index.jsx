import { createContext, useState } from "react"

export const ContextPublic = createContext()

export const ContextGlobal = ({children}) => {
  const [title, setTitle] = useState("")
  return (
    <ContextPublic.Provider value={{
      title,
      setTitle,
    }}>
      {children}
    </ContextPublic.Provider>
  )
}