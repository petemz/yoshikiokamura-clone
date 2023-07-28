import { useState, useContext } from "react"
import { Context } from "../Context"
import { Link } from "react-router-dom"

const NavBar = () => {
    const { currentPage, setCurrentPage, setCurrentSection, setIsModal } = useContext(Context)

    const [isNav, setIsNav] = useState(false)

    const links = ['gallery', 'projects', 'books', 'info', 'news']

    const handleLink = (page) => {
        setCurrentPage(page)
        setIsNav(false)
        setCurrentSection(1)
        setIsModal(false)
    }

    const arrowRight = 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M10 50 L90 50 M70 25 L90 50 L70 75" fill="none" stroke="black" strokeWidth="13" />
        </svg>
  
    return (
        <>
            {isNav ? 
                <div className="w-72 px-6 py-3 flex flex-col justify-end bg-white fixed top-0 left-0 z-50 h-full max-h-screen border-r-2 border-zinc-100">
                    <ul className="text-[29px] font-light mb-[28%]">
                        {links.map((link, index) => 
                            <li 
                                className="my-[2px] px-2 w-max group uppercase" key={index}    
                            >
                                <Link 
                                    className="flex items-center" to={link === 'gallery' ? '/' : `/${link}`}
                                    onClick={() => handleLink(link)}    
                                >
                                    {currentPage !== link && 
                                        <div className="mr-1 hidden group-hover:block w-5">
                                            {arrowRight}
                                        </div>
                                    }
                                    <span className={`${currentPage === link ? 'font-bold text-zinc-300' : 'group-hover:font-semibold'}`}>{link}</span>
                                </Link>
                            </li>
                        )} 
                    </ul>

                    <div className="font-thin">
                        <div className="my-6">
                            <p className="text-2xl font-normal mb-1">Contact</p>
                            <button 
                                onClick={() => {
                                    navigator.clipboard.writeText('sashimimoyashi@gmail.com')
                                }}
                            >
                                <span>Copy email</span>
                            </button>
                        </div>

                        <div className="my-6">
                            <p className="text-2xl font-normal mb-1">SNS</p>
                            <p><a href="https://twitter.com/sashimimoyashi">Twitter</a> / <a href="https://www.instagram.com/sashimimoyashi/">Instagram</a> / <a href="https://weibo.com/p/1005057439829686/photos">Weibo</a></p>
                        </div>

                        <div className="my-5">
                            <p className="text-2xl font-normal mb-1">Store</p>
                            <p><a href="https://sashimimoyashi.booth.pm/">Booth</a> / <a href="https://suzuri.jp/sashimimoyashi/">Suzuri</a></p>
                        </div>
                    </div>

                    <button onClick={() => setIsNav(false)} className="w-8 p-1 absolute top-6 right-1">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="12" />
                            <line x1="0" y1="100" x2="100" y2="0" stroke="black" strokeWidth="12" />
                        </svg>
                    </button>
                </div>
            :
                <div className="bg-white md:w-max md:h-max md:rounded-full md:border-[0.1px] md:border-zinc-400 md:top-5 md:left-7 flex justify-center items-center fixed top-0 left-0 z-50 w-16 h-full border-r-2 border-zinc-100">
                    <button onClick={() => setIsNav(true)} className="w-14 md:w-12">
                        <svg className=" rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
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