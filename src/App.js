import { useRef, useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
//import WaveAnimation from "./Components/Waves";
//import Waver from "./Components/Test";
//import Third from "./Components/Third";
import Home from "./Components/Home";
import Projects from './Components/Projects';
import Books from './Components/Books';
import Info from './Components/Info';
import News from './Components/News';
import NavBar from './Components/Nav';

const App = () => {

  return (
    <div
      className='flex bg-white w-full h-screen '
    >
      <NavBar />

      <Routes>
        <Route exact path="/"
          element={<Home />}
        />

        <Route exact path="/projects"
          element={<Projects />}
        />

        <Route exact path="/books"
          element={<Books />}
        />

        <Route exact path="/info"
          element={<Info />}
        />

        <Route exact path="/news"
          element={<News />}
        />
      </Routes>

      {/*
        <div className="h-full inline-block w-[700vw] absolute top-0 bg-slate-900" >
          <WaveAnimation />
        </div>
      */}
    </div>
  );
};

export default App;
