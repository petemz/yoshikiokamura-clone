import { createContext, useState, } from "react"

const Context = createContext()

const ContextProvider = (props) => {
    const [currentPage, setCurrentPage] = useState('gallery')
    const [currentSection, setCurrentSection] = useState(1)

    return (
        <Context.Provider value={{currentPage, setCurrentPage, currentSection, setCurrentSection, }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
