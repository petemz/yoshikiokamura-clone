import { useContext, useState } from "react"
import { Context } from "../Context"


const ArtModal = ({item}) => {
    const { setIsModal } = useContext(Context)
    const [isContact, setIsContact] = useState()
    const [isCopied, setIsCopied] = useState(false)
    
    const handleContactTab = (title) => {
        setIsContact(true)
        //setContactBook(title)
    }

    const handleTabClose = () => {
        setIsContact(false)
        setIsCopied(false)
    }

    const handleCopy = () => {
        setIsCopied(true)
        navigator.clipboard.writeText('Name:\nCountry:\nShipping Address:\nBook Title:')
    }

    return (
        <div className="w-screen h-screen fixed bg-white z-40">
            <div className="h-full flex justify-center items-center">
                <img className="w-[490px] h-[490px] " src={item.img} alt="" />        
            </div>

            <div className="h-full py-[12%] flex flex-col justify-between items-end absolute top-0 right-10"> 
                <div className="h-20 flex-shrink-0 bg-red-600 w-40">
                    {/*Art navigator*/}
                </div>

                <div className="flex items-center">
                    <span className="text-xl mr-4">Back</span>
                    <button onClick={() => setIsModal(false)} className="w-8 p-1">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="12" />
                            <line x1="0" y1="100" x2="100" y2="0" stroke="black" strokeWidth="12" />
                        </svg>
                    </button>
                </div>

                <button  onClick={() => handleContactTab()}>
                    <span>Contact</span>
                </button>
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
                            <p>Book Title: {}</p>

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