import { useState, useEffect, useRef } from "react"
import WelcomeArt from "./WelcomeArt"
import Indicator from "./SectionIndicator"
import Art from "./Arts"

const Home = () => {
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
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return

        const xDiff = e.clientX - startX
            xScrollRef.current.scrollLeft = scrollLeft - xDiff
        }

        const handleMouseUp = () => {
        setIsDragging(false)
    }

    return  (
        <div 
            className="flex bg-white w-full h-screen overscroll-x-auto overflow-y-hidden whitespace-nowrap z-0 pr-96"
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
        </div>
    )
}

export default Home