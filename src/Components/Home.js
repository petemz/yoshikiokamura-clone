import WelcomeArt from "./WelcomeArt"

const Home = () => {
    return  (
        <div className="flex z-0">
            <WelcomeArt />

            <div className="w-[1000px] px-14 relative">
                <h2 className="text-6xl py-3 absolute z-10 top-0">Gallery</h2>

                <div className="h-full flex items-center w-[500px]">
                    <div className="px-5 border-l-2 w-full h-max leading-relaxed tracking-wide flex flex-col justify-center border-black">
                        <p className="mb-12 italic text-[14px]">You can see a list of pictures that i have <br/> created in the past <br/> Click or tap each picture <br/> to see more details <br/> A black circle (O)  <br/> can be purchased through email.</p>

                        <p className=" text-zinc-500">You can view my artworks here. <br/> Click ir tap on each artwork to see it <br/> in more detail <br/> .O) <br/> are available for purchase via email.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home