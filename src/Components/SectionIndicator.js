import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../Context"

const Indicator = () => {
    const { currentSection, setCurrentSection } = useContext(Context)

    const indicators = [
        {section: 1, item: '1-40'}, 
        {section: 2, item: '41-80'},
        {section: 3, item: '81-120'},  
        {section: 4, item: '121-160'}, 
        {section: 5, item: '161-200'},
        {section: 6, item: '201-240'},  
        {section: 7, item: '241-272'},
    ]

    return (
        <div className="flex items-center text-xl font-light text-zinc-400 px-1 m-auto h-full relative">
            <ul className="h-max flex flex-col-reverse">
                {indicators.map((indicator, index) => {
                    return(
                        <li key={index} className="group hover:text-black">
                            <Link 
                                className="flex hover:font-normal" to={`/gallery/section${index + 1}`}
                                onClick={() => setCurrentSection(indicator.section)}    
                            >
                                <span className="w-5 py-2 text-right pr-6">{indicator.section}</span>
                                <div className={`w-[1.6px] z-10 ${currentSection === indicator.section ? 'bg-black' : 'group-hover:bg-black'} `}></div>
                                <span className="pl-4 py-2 w-24 ">{indicator.item}</span>
                            </Link>
                        </li>
                        
                    )}
                )}
            </ul>

            <div id="grad" className="w-[1.8px] h-full absolute left-[28px]">
                {/*Gradient divider line*/}
            </div>
        </div>
    )
}

export default Indicator