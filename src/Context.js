import { createContext, useState, } from "react"

const Context = createContext()

const ContextProvider = (props) => {
    const [currentPage, setCurrentPage] = useState()

    return (
        <Context.Provider value={{currentPage, setCurrentPage, }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
