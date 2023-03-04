import React,{ createContext,ReactNode,useContext, useState } from "react";
interface ContextTypes {
    theme:boolean,
    setTheme: React.Dispatch<React.SetStateAction<boolean>>
}

const appContext = createContext({
    theme : false,
    setTheme: null
})
const useAppContext = () =>{
    useContext(appContext)
}
interface Props {
    children:ReactNode
}
const AppContextProvider =({children}:Props)=>{
    const [theme, setTheme]= useState<boolean>(false)
    const value = {
        theme, setTheme
    }
    return <appContext.Provider value={value}>{children}</appContext.Provider>
}
export default AppContextProvider