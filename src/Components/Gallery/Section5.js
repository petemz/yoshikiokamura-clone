import { useState,useEffect, useRef } from "react";
import Art from "../Arts";
import Indicator from "../SectionIndicator"

const Section5 = () => {
    const xScrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    //scrollEnd is for progress bar
    const [scrollEnd, setScrollEnd] = useState(0)

    const handleScroll = (e) => {
        if (e.deltaY !== 0) {
            xScrollRef.current.scrollLeft += e.deltaY
        }
    }

    useEffect(() => {
        // Disabling horizontal scroll event from touchpad
        const handleXScroll = (e) => {
            if (e.deltaX !== 0) {
            e.stopPropagation()
            e.preventDefault()
            }

                  // This will calculate how many pixels the page is vertically
            const winScroll = xScrollRef.current.scrollLeft
            // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
            const width =
                xScrollRef.current.scrollWidth -
                xScrollRef.current.clientWidth
        
            // This will calculate the final total of the percentage of how much the user has scrolled.
            const scrolled = (winScroll / width) * 100

            console.log(scrolled)
        
            setScrollEnd(scrolled)
        }

        const current = xScrollRef.current

        xScrollRef.current.addEventListener('wheel', handleXScroll, { passive: false })

        return () => {
            current.removeEventListener('wheel', handleXScroll, { passive: false })
        }
    }, [])

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
            className="flex bg-white w-full h-screen overscroll-x-auto overflow-y-hidden z-0 pl-52 pr-96"
            ref={xScrollRef}
            onWheel={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp} 
        >
            <Indicator />

            <Art />

            <Indicator />
        </div>
    )
}

export default Section5