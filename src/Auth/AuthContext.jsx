import React,{createContext} from 'react'

export const AuthContext=createContext();
export const AuthContextProvider=({children})=>{
    const [arr,setArr]=React.useState([]);
    const [auth,setAuth]=React.useState(false);

    const addInput=(payload)=>{
        setArr([...arr,payload])
    }
      return <AuthContext.Provider value={{
             arr,
             addInput,
             auth,
             setAuth
      }}>
      {children}
      </AuthContext.Provider>
}