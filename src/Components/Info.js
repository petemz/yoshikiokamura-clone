import { useRef, useContext, useEffect } from "react"
import { Context } from "../Context"

const Info = () => {
    const { setCurrentPage } = useContext(Context)
    const fixedRef = useRef(null)
    const scrollableRef = useRef(null)

    const handleScroll = (e) => {
        if (e.deltaY !== 0) {
            scrollableRef.current.scrollTop += e.deltaY
        }
    }

    useEffect(() => {
        setCurrentPage('info')
    })

    return (
        <div className="w-full pl-20 leading-loose tracking-wide p-4 grid grid-cols-[40%_50%] justify-between items-center">
            <div 
                className="flex h-full justify-center items-center [word-spacing:15px] tracking-[0.8vw] text-[2.2vw]"
                ref={fixedRef}
                onWheel={handleScroll}
            >
                <p><span className="font-bold ">YOSHIKI</span> OKAMURA</p>
            </div>

            <div 
                className="h-full py-32 text-zinc-500 overflow-y-scroll"
                ref={scrollableRef}
            >
                <h1 className="text-5xl text-black mb-8">Yoshiki Okamura</h1>
                <p className="mb-5 text-black font-medium">Born in Tokyo in 1996. Graduated from Musashino Art University in 2019.</p>

                <ul className="mb-14">
                    <li className="mb-1 flex">
                        <span className="w-36 block">Contact</span>
                        <span className="">Copy email</span>
                    </li>

                    <li className="mb-1 flex">
                        <span className="w-36 block">SNS</span>
                        <span><a href="https://twitter.com/sashimimoyashi">Twitter</a> / <a href="https://www.instagram.com/sashimimoyashi/">Instagram</a> / <a href="https://weibo.com/p/1005057439829686/photos">Weibo</a></span>
                    </li>

                    <li className="mb-1 flex">
                        <span className="w-36 block">Store</span>
                        <span><a href="https://sashimimoyashi.booth.pm/">Booth</a> / <a href="https://suzuri.jp/sashimimoyashi/">Suzuri</a></span>
                    </li>
                </ul>

                <div className="mb-14 w-[100%] max-w-[450px]">
                    <h2 className="text-2xl mb-3 text-black">About Order</h2>

                    <p>I will explain the commission fee for the work.</p>
                    <p>In the art world, it's common to set prices based on how much you pay per issue. It is a method in which the price is determined according to the size standard called No.</p>
                    <p>My painting costs 50,000 yen plus consumption tax for size 0 only, and 20,000 yen plus consumption tax for each size.</p>
                    <p>You can check the size requirements for artworks from <a href="https://www.sizekensaku.com/sonota/canvas.html">this link.</a></p>
                    <p>Most of the paintings I usually make are S0 (180mm x 180mm), so you can request and purchase them for 45,000 yen plus consumption tax.</p>
                    <p>In addition, paintings will only be sold as a principle of ownership.</p>
                </div>

                <div>
                    <h2 className="text-2xl mb-2 text-black">Credit</h2>
                    <p className="flex mb-1"><span className="w-36 block">logo design</span> <span>eins.blue</span></p>
                    <p className="flex mb-1"><span className="w-36 block">website</span> <span>Keita Yamada</span></p>
                </div>
            </div>
        </div>
    )
}

export default Info