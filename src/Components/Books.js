import { useState, useEffect, useRef, useContext } from "react";
import { Context } from "../Context";
import book1 from "../Assets/Books/book-1.webp"
import book2 from "../Assets/Books/book-2.webp"
import book3 from "../Assets/Books/book-3.webp"
import book4 from "../Assets/Books/book-4.webp"
import book5 from "../Assets/Books/book-5.webp"
import book6 from "../Assets/Books/book-6.webp"

const Books = () => {
    const { setCurrentPage } = useContext(Context)
    const [isContact, setIsContact] = useState(false)
    const [contactBook, setContactBook] = useState('')

    const handleContactTab = (title) => {
        setIsContact(true)
        setContactBook(title)
    }

    const books = [
        {title: 'walk', img: book1, year: 0, link: 'https://sashimimoyashi.booth.pm/items/4698031'},
        {title: 'crystal night', img: book2, year: '2022', link: 'https://sashimimoyashi.booth.pm/items/3814766'},
        {title: 'Endless', img: book3, year: '2021', link: 'https://sashimimoyashi.booth.pm/items/3201136'},
        {title: 'don\'t leave me', img: book4, year: '2020', link: 'https://sashimimoyashi.booth.pm/items/2711241'},
        {title: 'Kudarano', img: book5, year: '2020', link: 'https://sashimimoyashi.booth.pm/items/2711305'},
        {title: 'that summer', img: book6, year: '2019', link: 'https://sashimimoyashi.booth.pm/items/2711296'},
    ]

    const xScrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        // Disabling horizontal scroll event from touchpad
        const handleXScroll = (e) => {
            if (e.deltaX !== 0) {
            e.stopPropagation()
            e.preventDefault()
            }
        }

        const current = xScrollRef.current

        xScrollRef.current.addEventListener('wheel', handleXScroll, { passive: false })

        return () => {
            current.removeEventListener('wheel', handleXScroll, { passive: false })
        }
    }, [])

    const handleScroll = (e) => {
        if (e.deltaY !== 0) {
            xScrollRef.current.scrollLeft += e.deltaY
        }
    }

    //Custom Drag event to scroll through the app
    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.clientX)
        setScrollLeft(xScrollRef.current.scrollLeft)
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return

        const xDiff = e.clientX - startX
            xScrollRef.current.scrollLeft = scrollLeft - xDiff
        }

        const handleMouseUp = () => {
        setIsDragging(false)
    }

    useEffect(() => {
        setCurrentPage('books')
    })

    return (
        <div
            className="overscroll-x-auto overflow-y-hidden flex items-center relative w-full h-screen p z-0 px-20"
            ref={xScrollRef}
            onWheel={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp} 
        >
            <h1 className="text-7xl font-semibold absolute top-4 left-28">BOOKS</h1>

            {books.map((book, index) => {
                return(
                    <div className="mx-10 text-zinc-700" key={index}>
                        <div className="text-2xl flex justify-between">
                            <span>{book.title}</span> 
                            <span>{book.year}</span>
                        </div>

                        <div className="w-[500px] p-4 flex justify-center h-72 my-2 shadow-[inset_0_0_12px_4px_rgba(0,0,0,0.08)]">
                            <img src={book.img} alt="" />
                        </div>

                        <div className="text-lg">
                            <button onClick={() => handleContactTab(book.title)} className="mr-10">Contact</button>
                            <span><a href={book.link}>Booth</a></span>
                        </div>
                    </div>
                 
                )}
            )}

            
            {isContact && //Contact Tab
                <div className="h-full flex fixed top-0 left-0 w-screen backdrop-blur-[2px]">
                    <div className="relative flex justify-end items-center w-1/2">
                        <button onClick={() => setIsContact(false)} className="w-8 p-1 mr-[14%]">
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
                            <p>Book Title: {contactBook}</p>

                            <button className="absolute text-base font-normal right-3 top-1">Copy</button>
                        </div>

                        <div className="font-normal">
                            <p className="mb-2"><a href="sashimimoyashi@gmail.com">Open mail app</a></p>
                            <p href="">Copy email address</p>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default Books