import { createContext, useState, } from "react"

const Context = createContext()

const ContextProvider = (props) => {
    const [currentPage, setCurrentPage] = useState()
    const [currentSection, setCurrentSection] = useState()
    
    const [isModal, setIsModal] = useState(false)
    const [modalArt, setModalArt] = useState({})

    
    const handleModal = (art) => {
        setIsModal(true)
        setModalArt(art)
    }

    return (
        <Context.Provider value={{currentPage, setCurrentPage, currentSection, setCurrentSection, isModal, setIsModal, modalArt, setModalArt, handleModal, }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
