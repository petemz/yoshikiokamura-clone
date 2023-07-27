import { useState, useEffect, useRef, useContext } from "react"
import { Context } from "../../Context"
import Art from "../Arts";
import Indicator from "../SectionIndicator"

import data from "../../Assets/Data"

const Section3 = () => {
    const items = data.slice(40, 60)

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
        setCurrentSection(3)
    })

    return (
        <div 
            className="flex bg-white w-full h-screen overscroll-x-auto overflow-y-hidden z-0 pl-52 md:pl-36 pr-96 md:pr-64"
            ref={xScrollRef}
            onWheel={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp} 
        >
            <Indicator />

            <Art items={items} section={3}/>
            
            <Indicator pageEnd={true}/>
            
            <div className="fixed text-black text-lg bottom-8 right-8 z-[1000]">
                {scrollEnd < 15 && 
                    <div className="flex items-center mb-1">
                        <p>Scroll or Drag Sideways</p>  
                        <div className="arrow-container ml-3">
                            <svg className="arrow ml-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                        </div>
                    </div>
                }

                {/* Scroll progress bar */}
                <div className="w-60 h-[1.3px] bg-zinc-300">
                    <div style={{ width: `${scrollEnd}%` }} className="h-full bg-black">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3