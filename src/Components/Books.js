import { useState, useEffect, useRef } from "react";

const Books = () => {
    const books = [
        {name: 'walk', img: {}, year: 0, link: 'https://sashimimoyashi.booth.pm/items/4698031'},
        {name: 'crystal night', img: {}, year: '2022', link: 'https://sashimimoyashi.booth.pm/items/3814766'},
        {name: 'Endless', img: {}, year: '2021', link: 'https://sashimimoyashi.booth.pm/items/3201136'},
        {name: 'don\'t leave me', img: {}, year: '2020', link: 'https://sashimimoyashi.booth.pm/items/2711241'},
        {name: 'Kudarano', img: {}, year: '2020', link: 'https://sashimimoyashi.booth.pm/items/2711305'},
        {name: 'that summer', img: {}, year: '2019', link: 'https://sashimimoyashi.booth.pm/items/2711296'},
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

    return (
        <div
            className="flex items-center relative w-full h-screen overscroll-x-auto overflow-y-hidden whitespace-nowrap z-0 px-20"
            ref={xScrollRef}
            onWheel={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp} 
        >
            <h1 className="text-7xl font-semibold absolute top-4 left-28">BOOKS</h1>

            {books.map(book => {
                return(
                    <div className="mx-10 text-zinc-700">
                        <div className="text-2xl flex justify-between">
                            <span>{book.name}</span> 
                            <span>{book.year}</span>
                        </div>

                        <div className="w-[500px] h-72 my-2 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.1)]">

                        </div>

                        <div className="text-lg">
                            <span className="mr-10">Contact</span>
                            <span><a href={book.link}>Booth</a></span>
                        </div>
                    </div>
                 
                )}
            )}
        </div>
    )
}

export default Books