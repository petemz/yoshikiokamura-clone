import { createContext, useState, } from "react"

const Context = createContext()

const ContextProvider = (props) => {
    const [currentPage, setCurrentPage] = useState('gallery')

    return (
        <Context.Provider value={{currentPage, setCurrentPage, }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
