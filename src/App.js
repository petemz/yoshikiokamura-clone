import React, { useRef } from 'react';
//import WaveAnimation from "./Components/Waves";
//import Waver from "./Components/Test";
//import Third from "./Components/Third";
import Home from "./Components/Home";

const HorizontalScrollOnVerticalScroll = () => {
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    // Check if there's vertical scroll ( deltaY != 0) and apply horizontal scroll
    if (e.deltaY !== 0) {
      //e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY * 0.6;
    }
  };

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