import homeImg from "../Assets/home-img.jpg"

const Home = () => {
    return (
        <div 
            style={{backgroundImage : `url("${homeImg}")`}}
            className="h-full bg-center flex items-center"
        >
            <div className="bg-white font-light tracking-[13px] w-max h-max ml-[10%] px-5 py-2 text-3xl">
                <p className=""><span className="font-semibold ">LUMBER</span> JACK</p>
            </div>
        </div>
    )
}

export default Home