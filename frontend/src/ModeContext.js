import React, { useState, createContext } from "react"
const ModeContext = createContext()
const ModeProvider = ({ children }) => {
    const [btn, setBtn] = useState("Dark")
    const [mode, setMode] = useState(false)
    const light = {
        backgroundColor: "white",
        color: "black",
        transition: "all 0.75s",
        border: "1.5px solid black"
    }
    const dark = {
        backgroundColor: "black",
        color: "white",
        transition: "all 0.75s",
        border: "1.5px solid white"
    }
    const toggler = () => {
        setMode(!mode)
        if (btn === "Dark")
            setBtn("Light")
        if (btn === "Light")
            setBtn("Dark")
    }
    return <ModeContext.Provider value={{mode, btn, toggler, light, dark}}>{children}</ModeContext.Provider>
}
export { ModeContext, ModeProvider }