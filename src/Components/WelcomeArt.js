import homeImg from "../Assets/home-img.jpg"

const WelcomeArt = () => {
    return (
        <div 
            style={{backgroundImage : `url("${homeImg}")`}}
            className="h-full flex-shrink-0 w-[calc(100vw-64px)] md:w-screen ml-16 md:ml-0 z-20 bg-center flex items-center"
        >
            <div className="bg-white font-light tracking-[13px] sm:tracking-[10px] w-max h-max ml-[10%] px-5 py-2 xs:text-base sm:text-lg md:text-xl text-3xl">
                <p className=""><span className="font-semibold ">YOSHIKI</span> OKAMURA</p>
            </div>
        </div>
    )
}

export default WelcomeArt