import WaveAnimation from "./Components/Waves";
import Home from "./Components/Home";
//import Test from "./Components/Test";

function App() {
  return (
    <div className="App h-screen w-[700vw] bg-yellow-400 pl-16 flex .no-scrollbar">
      <div className="bg-white absolute top-0 left-0 z-50 w-16 h-full ">
        {/*sidebar*/}
      </div>

      <Home />
      <div className="h-full w-[700vw] absolute top-0 bg-slate-900" >
        <WaveAnimation />
      </div>
    </div>
  )
}

export default App;
