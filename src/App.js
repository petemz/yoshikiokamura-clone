import { useContext } from 'react'
import { Routes, Route } from "react-router-dom"
import { Context } from "./Context"
import Home from "./Pages/Home"
import Projects from './Pages/Projects'
import Books from './Pages/Books'
import Info from './Pages/Info'
import News from './Pages/News'
import CustomCursor from './Components/Cursor'
import Section from './Components/Section'
import NavBar from './Components/Nav'
import ArtModal from './Components/ArtModal'

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
    <div className='flex bg-white w-full h-screen'>
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
      
      {isModal && <ArtModal item={modalArt}/>}
    </div>
  )
}

export default App
