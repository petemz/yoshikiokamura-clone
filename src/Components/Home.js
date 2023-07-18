import WelcomeArt from "./WelcomeArt"
import Indicator from "./SectionIndicator"
import Art from "./Arts"

const Home = () => {
    return  (
        <div className="flex h-full z-0 pr-96">
            <WelcomeArt />

            <div className="w-[555px] px-14 relative">
                <h2 className="text-6xl py-3 absolute z-10 top-0">Gallery</h2>

                <div className="h-full flex items-center">
                    <div className="px-5 border-l-2 w-full h-max leading-relaxed tracking-wide flex flex-col justify-center border-black">
                        <p className="mb-12 italic text-[0.93em]">You can see a list of pictures that i have <br/> created in the past <br/> Click or tap each picture <br/> to see more details <br/> A black circle (O)  <br/> can be purchased through email.</p>

                        <p className=" text-zinc-500">You can view my artworks here. <br/> Click ir tap on each artwork to see it <br/> in more detail <br/> .O) <br/> are available for purchase via email.</p>
                    </div>
                </div>
            </div>

            <Indicator />

            <Art />

            <Indicator />
        </div>
    )
}

export default Home