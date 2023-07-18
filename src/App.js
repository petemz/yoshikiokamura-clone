import React, { useRef, useEffect, useState } from 'react';
//import WaveAnimation from "./Components/Waves";
//import Waver from "./Components/Test";
//import Third from "./Components/Third";
import Home from "./Components/Home";

const HorizontalScrollOnVerticalScroll = () => {
  const containerRef = useRef(null);
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

    containerRef.current.addEventListener('wheel', handleXScroll, { passive: false })

    return () => {
      containerRef.current.removeEventListener('wheel', handleXScroll, { passive: false })
    }
  }, [])

  const handleScroll = (e) => {
    if (e.deltaY !== 0) {
      containerRef.current.scrollLeft += e.deltaY
    }
  }

  //Custom Drag event to scroll through the app
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setScrollLeft(containerRef.current.scrollLeft)
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return

    const xDiff = e.clientX - startX
    containerRef.current.scrollLeft = scrollLeft - xDiff
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div
      ref={containerRef}
      className='flex bg-white w-full h-screen overscroll-x-auto overflow-y-hidden whitespace-nowrap'
      onWheel={handleScroll}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="bg-white absolute top-0 left-0 z-50 w-16 h-full ">
        {/*sidebar*/}
      </div>
      
      <Home />

      {/*
        <div className="h-full inline-block w-[700vw] absolute top-0 bg-slate-900" >
          <WaveAnimation />
        </div>
      */}
    </div>
  );
};

export default HorizontalScrollOnVerticalScroll;
