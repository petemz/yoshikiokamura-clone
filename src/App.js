import { useContext } from 'react';
import { Routes, Route } from "react-router-dom"
//import WaveAnimation from "./Components/Waves";
//import Waver from "./Components/Test";
//import Third from "./Components/Third";
import Home from "./Components/Home"
import Projects from './Components/Projects'
import Books from './Components/Books'
import Info from './Components/Info'
import News from './Components/News'
import Section1 from './Components/Gallery/Section1'
import Section2 from './Components/Gallery/Section2'
import Section3 from './Components/Gallery/Section3'
import Section4 from './Components/Gallery/Section4'
import Section5 from './Components/Gallery/Section5'
import Section6 from './Components/Gallery/Section6'
import Section7 from './Components/Gallery/Section7'

import ArtModal from './Components/ArtModal';
import NavBar from './Components/Nav'
import AnimatedCursor from "react-animated-cursor"

import { Context } from "./Context"

const App = () => {
  const { isModal, modalArt } = useContext(Context)

  const routes = [
    { component: <Home />, path: '/'},
    { component: <Projects />, path: '/projects'},
    { component: <Books />, path: '/books'},
    { component: <Info />, path: '/info'},
    { component: <News />, path: '/news'},
    { component: <Section1 />, path: 'gallery/section1'},
    { component: <Section2 />, path: '/gallery/section2'},
    { component: <Section3 />, path: '/gallery/section3'},
    { component: <Section4 />, path: '/gallery/section4'},
    { component: <Section5 />, path: '/gallery/section5'},
    { component: <Section6 />, path: '/gallery/section6'},
    { component: <Section7 />, path: '/gallery/section7'},
  ]

  return (
    <div
      className='flex bg-white w-full h-screen '
    >
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

      <AnimatedCursor 
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
      />

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
