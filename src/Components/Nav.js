import { useState } from "react"

const NavBar = () => {
    const [isNav, setIsNav] = useState()

    const handleNav = () => {
        setIsNav(!isNav)
    }

    const links = ['gallery', 'projects', 'books', 'info', 'news']

    return (
        <>
            {isNav ? 
                <div className="w-72 px-8 py-3 flex flex-col justify-end bg-white absolute top-0 left-0 z-50 h-full border-r-2 border-zinc-100">
                    <ul className="text-[30px] font-light mb-[35%]">
                        {links.map(link => 
                            <li className="my-3 uppercase">
                                <a href={link}>{link}</a>
                            </li>
                        )} 
                    </ul>

                    <div className="font-thin">
                        <div className="my-6">
                            <p className="text-2xl font-normal mb-1">Contact</p>
                            <p className="">Copy email</p>
                        </div>

                        <div className="my-6">
                            <p className="text-2xl font-normal mb-1">SNS</p>
                            <p><a href="#">Twitter</a> / <a href="#">Instagram</a> / <a href="#">Weibo</a></p>
                        </div>

                        <div className="my-5">
                            <p className="text-2xl font-normal mb-1">Store</p>
                            <p><a href="#">Booth</a> / <a href="#">Suzuri</a></p>
                        </div>
                    </div>

                    <button onClick={() => setIsNav(false)} className="w-8 p-1 absolute top-6 right-1">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <line x1="0" y1="0" x2="100" y2="100" stroke="black" stroke-width="12" />
                            <line x1="0" y1="100" x2="100" y2="0" stroke="black" stroke-width="12" />
                        </svg>
                    </button>
                </div>
            :
                <div className="bg-white flex justify-center items-center absolute top-0 left-0 z-50 w-16 h-full border-r-2 border-zinc-100">
                    <button onClick={() => setIsNav(true)} className="w-14">
                        <svg className=" rounded-full hover:border-2 border-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <g transform="rotate(90 50 50)">
                                <rect x="25" y="45" width="6" height="6" fill="black" />
                                <rect x="42" y="45" width="6" height="6" fill="black" />
                                <rect x="59" y="45" width="6" height="6" fill="black" />
                            </g>
                        </svg>
                    </button>
                </div>             
            }
        </>
    )

}

export default NavBar