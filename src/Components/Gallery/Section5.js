import { useState, useEffect, useRef, useContext } from "react"
import { Context } from "../../Context"
import Art from "../Arts";
import Indicator from "../SectionIndicator"

import data from "../../Assets/Data"

const Section5 = () => {
    const items = data.slice(80, 100)

    
    const { setCurrentSection } = useContext(Context)
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

            const winScroll = xScrollRef.current.scrollLeft
            const width =
                xScrollRef.current.scrollWidth -
                xScrollRef.current.clientWidth
        
            const scrolled = (winScroll / width) * 100
        
            setScrollEnd(scrolled)
        }

        const current = xScrollRef.current

        xScrollRef.current.addEventListener('wheel', handleXScroll, { passive: false })

        return () => {
            current.removeEventListener('wheel', handleXScroll, { passive: false })
        }
    }, [])

    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.clientX)
        setScrollLeft(xScrollRef.current.scrollLeft)

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }

    const handleMouseUp = () => {
        setIsDragging(false)

        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return

        const xDiff = e.clientX - startX
        xScrollRef.current.scrollLeft = scrollLeft - xDiff
    }

    useEffect(() => {
        return () => {
          if (isDragging) {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
          }
        };
    }, [isDragging])
    
    useEffect(() => {
        setCurrentSection(5)
    })

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

            <Art items={items} section={5}/>
            
            <Indicator />
        </div>
    )
}

export default Section5