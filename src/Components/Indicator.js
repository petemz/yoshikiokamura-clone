import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../Context"

const Indicator = ({pageEnd}) => {
    const { currentSection, setCurrentSection, setCurrentPage } = useContext(Context)

    const indicators = [
        {section: 1, item: '1-20'}, 
        {section: 2, item: '21-40'},
        {section: 3, item: '41-80'},  
        {section: 4, item: '61-80'}, 
        {section: 5, item: '81-100'},
        {section: 6, item: '101-120'},  
        {section: 7, item: '121-133'},
    ]

    const handleClick = (section) => {
        setCurrentSection(section)
        setCurrentPage('')
    }

    return (
        <nav className="flex items-center text-xl font-light px-1 m-auto h-full overflow-visible relative">
            <ul className="h-max flex flex-col-reverse">
                {indicators.map((indicator, index) => {
                    return(
                        <li className={`${currentSection === indicator.section ? 'text-black' : 'group hover:text-black text-zinc-400'}`} key={index} >
                            {currentSection === indicator.section ?
                                <div className="flex px-4">
                                    <span className="w-5 py-2 text-right pr-6">{indicator.section}</span>
                                    <div className={`w-[1.6px] z-10 ${currentSection === indicator.section ? 'bg-black' : 'group-hover:bg-black'}`}></div>
                                    <span className="pl-4 py-2">{indicator.item}</span>
                                </div>
                                :
                                <Link
                                    className="flex pl-4 pr-1" to={`/gallery/section${index + 1}`}
                                    onClick={() => handleClick(indicator.section)}    
                                >
                                    <span className="w-5 py-2 text-right pr-6">{indicator.section}</span>
                                    {/* hover section indicator*/}
                                    <div className={`w-[1.6px] z-10 ${currentSection === indicator.section ? 'bg-black' : 'group-hover:bg-black'} `}></div>
                                    <span className="pl-4 py-2">{indicator.item}</span>
                                </Link>
                            }      

                            {pageEnd &&
                                <div>
                                    {currentSection + 1 === indicator.section ?
                                        <div className="absolute left-16 w-max top-2 text-black font-semibold text-7xl">
                                            <span>{indicator.item}</span>
                                            <svg className="w-10 mt-4 ml-auto" viewBox="0 0 64 46" xmlns="http://www.w3.org/2000/svg"><path d="M4 43.923h20.77V25.461h18.46V7H64" fill="none" stroke="#1a1a1a" strokeWidth="3"></path> <path d="M6.336 22.808L19.527 9.617v6.562l2.331-.023V5.386h-10.77l-.023 2.33h6.562L4.435 20.908l1.9 1.9z" fill="#1a1a1a"></path></svg>
                                        </div>
                                        :
                                        <div>

                                        </div>
                                    }
                                </div>
                            }   
                        </li>


                    )}
                )}
            </ul>

            <div id="grad" className="w-[1.8px] h-full absolute left-[44px]">
                {/*Gradient divider line*/}
            </div>
        </nav>
    )
}

export default Indicator