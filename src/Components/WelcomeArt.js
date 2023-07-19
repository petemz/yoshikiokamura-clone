import homeImg from "../Assets/home-img.jpg"

const WelcomeArt = () => {
    return (
        <div 
            style={{backgroundImage : `url("${homeImg}")`}}
            className="h-full flex-shrink-0 w-[calc(100vw-64px)] ml-16 z-20 bg-center flex items-center"
        >
            <div className="bg-white font-light tracking-[13px] w-max h-max ml-[10%] px-5 py-2 text-3xl">
                <p className=""><span className="font-semibold ">YOSHIKI</span> OKAMURA</p>
            </div>
        </div>
    )
}

export default WelcomeArt