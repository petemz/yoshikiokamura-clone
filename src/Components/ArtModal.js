import { useContext, useState } from "react"
import { Context } from "../Context"
import { useNavigate } from "react-router-dom"


const ArtModal = () => {
    const { currentSection, modalArt, setModalArt, setIsModal, items, artIndex, setArtIndex } = useContext(Context)

    const [isContact, setIsContact] = useState()
    const [isCopied, setIsCopied] = useState(false)
    
    const handleContactTab = (name) => {
        setIsContact(true)
    }
    const handleTabClose = () => {
        setIsContact(false)
        setIsCopied(false)
    }

    const handleCopy = () => {
        setIsCopied(true)
        navigator.clipboard.writeText('Name:\nCountry:\nShipping Address:\nArtwork Title:')
    }

    const navigate = useNavigate()

    const prevArt = () => {
        if (artIndex !== 0) {
            setModalArt(items[artIndex - 1])
            setArtIndex(artIndex - 1)
        } else if (currentSection !== 1) {
            setIsModal(false)
            return navigate(`gallery/section${currentSection - 1}`)
        }
    }
    const nextArt = () => {
        if (artIndex < items.length - 1) {
            setModalArt(items[artIndex + 1])
            setArtIndex(artIndex + 1)
        } else if (currentSection !== 7) {
            setIsModal(false)
            return navigate(`gallery/section${currentSection + 1}`)
        }
    }

    return (
        <div className="cont w-screen h-screen fixed bg-white z-40">
            <div className="h-full w-max pt-16 m-auto flex flex-col justify-center items-end">
                <img className="w-[490px] h-[490px] md:w-[275px] md:h-[275px]" src={modalArt.img} alt="" /> 

                <div className="mt-6 py-2 px-4 shadow-xl">
                    <p>{modalArt.name}</p>
                </div>
            </div>

            <div className="h-full md:hidden py-[12%] text-xl flex flex-col justify-between items-end absolute top-0 right-10"> 
                <div className="w-40">
                    <div className="flex justify-between">
                        <button onClick={() => prevArt()}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                        </button>

                        <p>{'0' + currentSection}</p>
                    </div>

                    <div className="h-[1px] my-2 mx-[5px] bg-zinc-200">
                        <div style={{ width: `${(artIndex + 1 ) * (100 / items.length)}%` }} className="bg-black h-full"></div>
                    </div>

                    <div className="flex justify-end">
                        <button onClick={() => nextArt()}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>                   
                        </button>
                    </div>
                </div>

                <div className="flex items-center">
                    <span>Back</span>
                    <button onClick={() => setIsModal(false)} className="w-8 p-1 ml-4">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="12" />
                            <line x1="0" y1="100" x2="100" y2="0" stroke="black" strokeWidth="12" />
                        </svg>
                    </button>
                </div>

                <button onClick={() => handleContactTab(modalArt.name)}>
                    <span>Contact</span>
                </button>
            </div>

            <div className="text-xl absolute top-6 w-[50%] right-[7%] -md:hidden">
                <div className="flex justify-between pr-1">
                    <button onClick={() => prevArt()}>
                        <svg className="w-6 h-6" viewBox="0 0 26 47" xmlns="http://www.w3.org/2000/svg"><path d="M23.1 46.2l2.8-2.7L5.5 23.1 25.9 2.7 23.1 0 0 23.1l23.1 23.1z"></path></svg>                    
                    </button>
                    <p>{'0' + currentSection}</p>
                </div>

                <div className="h-[1px] my-2 mx-[5px] bg-zinc-200">
                    <div style={{ width: `${(artIndex + 1 ) * 5}%` }} className="bg-black h-full"></div>
                </div>

                <div className="flex justify-end">
                    <button onClick={() => nextArt()}>
                        <svg className="w-6 h-6 rotate-180" viewBox="0 0 26 47" xmlns="http://www.w3.org/2000/svg"><path d="M23.1 46.2l2.8-2.7L5.5 23.1 25.9 2.7 23.1 0 0 23.1l23.1 23.1z"></path></svg>                    
                    </button>
                </div>
            </div>

            <div className="absolute w-full px-[7%] flex justify-between bottom-6 -md:hidden">
                <button onClick={() => handleContactTab(modalArt.name)}>
                    <span>Contact</span>
                </button>

                <div className="flex items-center">
                    <span>Back</span>
                    <button onClick={() => setIsModal(false)} className="w-8 p-1 ml-4">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="12" />
                            <line x1="0" y1="100" x2="100" y2="0" stroke="black" strokeWidth="12" />
                        </svg>
                    </button>
                </div>
            </div>

            {isContact && //Contact Tab
                <div className="h-full flex fixed top-0 left-0 w-screen backdrop-blur-[2px]">
                    <div className="relative flex justify-end items-center w-1/2">
                        <button onClick={() => handleTabClose()} className="w-8 p-1 mr-[14%]">
                            <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="12" />
                                <line x1="0" y1="100" x2="100" y2="0" stroke="black" strokeWidth="12" />
                            </svg>
                        </button>
                    </div>

                    <div className="text-[17px] font-light h-full w-1/2 p-8 border-l border-black bg-white">
                        <h2 className="text-2xl mb-4">How to buy</h2>
                        <p className="mb-5">You can buy books through email contact. Press "Open mail app" at the bottom to open email application. Or copy my email address and the required information template in the box below.</p>

                        <div className="w-full relative p-4 border mb-10 border-zinc-300 bg-gray-100">
                            <p>Name:</p>
                            <p>Country:</p>
                            <p>Shipping Address:</p>
                            <p>Artwork Title: {modalArt.name}</p>

                            <button 
                                className="absolute text-base font-normal right-3 top-1"
                                onClick={() =>  handleCopy()}
                                disabled={isCopied}
                            >
                                <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                            </button>
                        </div>

                        <div className="font-normal">
                            <p className="mb-3"><a href="sashimimoyashi@gmail.com">Open mail app</a></p>
                            <button 
                                onClick={() => {
                                    navigator.clipboard.writeText('sashimimoyashi@gmail.com')
                                }}
                            >
                                <span>Copy email address</span>
                            </button>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default ArtModal