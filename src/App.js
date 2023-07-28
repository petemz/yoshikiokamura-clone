import { useContext, useEffect, useState } from 'react';

import CustomCursor from './Components/Cursor';
import { Routes, Route } from "react-router-dom"
import { Context } from "./Context"
import Home from "./Pages/Home"
import Projects from './Pages/Projects'
import Books from './Pages/Books'
import Info from './Pages/Info'
import News from './Pages/News'
import Section from './Components/Section';
import ArtModal from './Components/ArtModal';
import NavBar from './Components/Nav'
import AnimatedCursor from "react-animated-cursor"

const App = () => {

  const { isModal, modalArt } = useContext(Context)

  const routes = [
    { component: <Home />, path: '/'},
    { component: <Projects />, path: '/projects'},
    { component: <Books />, path: '/books'},
    { component: <Info />, path: '/info'},
    { component: <News />, path: '/news'},
    { component: <Section section={1}/>, path: 'gallery/section1'},
    { component: <Section section={2}/>, path: '/gallery/section2'},
    { component: <Section section={3}/>, path: '/gallery/section3'},
    { component: <Section section={4}/>, path: '/gallery/section4'},
    { component: <Section section={5}/>, path: '/gallery/section5'},
    { component: <Section section={6}/>, path: '/gallery/section6'},
    { component: <Section section={7}/>, path: '/gallery/section7'},
  ]

  return (
    <div
      className='flex bg-white w-full h-screen '
    >
      <CustomCursor/>
      <NavBar />

      <Routes>
        {routes.map((route, index) => {
          return (
            <Route exact key={index} path={route.path}
              element={route.component}
            />
          )
        })}
      </Routes>

      {/*<AnimatedCursor 
        innerSize={10}
        outerSize={0.1}
        innerScale={0}
        outerScale={350}
        outerAlpha={0}
        hasBlendMode={true}
        trailingSpeed={1}
        color="0, 0, 0"
        innerStyle={{
          //backgroundColor: 'rgba(0, 0, 0, 0.1)', border: '1px solid #000'
          border: '1px solid #000'
        }}
        outerStyle={{
          border: '1px solid #000',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }}
        clickables={[
          'a',
          'button',
          '.art'
        ]}
      />*/}

      {/*
        <div className="h-full inline-block w-[700vw] absolute top-0 bg-slate-900" >
          <WaveAnimation />
        </div>
      */}
      
      {isModal && <ArtModal item={modalArt}/>}
    </div>
  )
}

export default App
