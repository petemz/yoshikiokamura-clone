const Indicator = () => {
    const indicators = [
        {section: 7, item: '241-272'},
        {section: 6, item: '201-240'}, 
        {section: 5, item: '161-200'}, 
        {section: 4, item: '121-160'}, 
        {section: 3, item: '81-120'},
        {section: 2, item: '41-80'},
        {section: 1, item: '1-40'},   
    ]

    return (
        <div className="flex items-center text-xl font-light text-zinc-400 px-1 m-auto h-full relative">
            <ul className="h-max">
                {indicators.map((indicator, index) => {
                    return(
                        <li key={index} className="my-3 hover:text-black">
                           <span className="mr-8">{indicator.section}</span>
                           <span>{indicator.item}</span> 
                        </li>
                        
                    )}
                )}
            </ul>

            <div id="grad" className="w-[1.8px] h-full absolute left-[29px]">
                {/*Gradient divider line*/}
            </div>
        </div>
    )
}

export default Indicator