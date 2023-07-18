import React, { useRef, useEffect } from 'react';
//import WaveAnimation from "./Components/Waves";
//import Waver from "./Components/Test";
//import Third from "./Components/Third";
import Home from "./Components/Home";

const HorizontalScrollOnVerticalScroll = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    //Disabling horizontal scroll event from touchpad
    const handleWheel = (e) => {
      if (e.deltaX !== 0) {
        e.stopPropagation()
        e.preventDefault()
      }
    }

    containerRef.current.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      containerRef.current.removeEventListener('wheel', handleWheel, { passive: false });
    };
  }, []);

  const handleScroll = (e) => {
    if (e.deltaY !== 0) {
      containerRef.current.scrollLeft += e.deltaY * 0.8
    }
  }

  return (
    <div
      ref={containerRef}
      className='flex bg-white w-full h-screen overscroll-x-auto overflow-y-hidden whitespace-nowrap'
      onWheel={handleScroll}
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