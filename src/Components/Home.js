import { useState, useEffect, useRef, useContext } from "react"
import { Context } from "../Context"
import WelcomeArt from "./WelcomeArt"
import Indicator from "./SectionIndicator"
import Art from "./Arts"

const Home = () => {
    const { setCurrentPage } = useContext(Context)
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


    useEffect(() => {
        setCurrentPage('gallery')
    })

    return  (
        <div 
            className="flex bg-white w-full h-screen overscroll-x-auto overflow-y-hidden z-0 pr-96"
            ref={xScrollRef}
            onWheel={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp} 
        >
            <WelcomeArt />

            <div className="w-[555px] px-14 relative">
                <h2 className="text-6xl py-3 absolute z-10 top-0">Gallery</h2>

                <div className="h-full flex items-center">
                    <div className="px-5 border-l-2 w-full h-max leading-relaxed tracking-wide flex flex-col justify-center border-black">
                        <p className="mb-12 italic text-[0.93em]">You can see a list of pictures that i have <br/> created in the past <br/> Click or tap each picture <br/> to see more details <br/> A black circle (O)  <br/> can be purchased through email.</p>

                        <p className=" text-zinc-500">You can view my artworks here. <br/> Click ir tap on each artwork to see it <br/> in more detail <br/> .O) <br/> are available for purchase via email.</p>
                    </div>
                </div>
            </div>

            <Indicator />

            <Art />

            <Indicator />

            <div className="fixed text-white text-lg bottom-8 right-8 z-[1000]">
                <div className="flex items-center mb-1">
                    <p>Scroll or Drag Sideways</p>  
                    <div className="arrow-container ml-3">
                        <svg className="arrow ml-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                    </div>
                    
                </div>
                

                {/* Scroll progress bar */}
                <div className="w-60 h-[1.3px] bg-zinc-300">
                    <div style={{ width: `${scrollEnd}%` }} className="h-full bg-black">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home