import { createContext, useState, } from "react"
import allArts from "./Assets/allArts"

const Context = createContext()

const ContextProvider = (props) => {
    const [currentPage, setCurrentPage] = useState()
    const [currentSection, setCurrentSection] = useState()
    const [isHoveringButtonOrLink, setIsHoveringButtonOrLink] = useState(false)
    const [isModal, setIsModal] = useState(false)
    const [modalArt, setModalArt] = useState({})
    const [artIndex, setArtIndex] = useState(0)

    const items = allArts.slice(20 * (currentSection - 1), 20 * currentSection)

    const handleModal = (art, index) => {
        setIsModal(true)
        setModalArt(art)
        setArtIndex(index)
    }

    return (
        <Context.Provider value={{currentPage, setCurrentPage, currentSection, setCurrentSection, isHoveringButtonOrLink, setIsHoveringButtonOrLink, isModal, setIsModal, modalArt, setModalArt, handleModal, items, artIndex, setArtIndex}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
