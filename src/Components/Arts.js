import { useContext } from "react"
import { Context } from "../Context"

const Art = ({items}) => {
    const { handleModal, currentSection } = useContext((Context))

    const arrowRight = 
        <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M10 50 L90 50 M70 25 L90 50 L70 75" fill="none" stroke="black" strokeWidth="4" />
        </svg>

    return (
        <div className="flex w-max px-60">
            {items.map((item, index) => {
                const position = () => {
                    if (index % 4 === 1) {
                        return {marginBottom: '50vh', }
                    } else if (index % 4 === 3) {
                        return {marginTop: '50vh', }
                    }
                }

                const part = () => {
                    let x = (currentSection - 1) * 20

                    if (index + 1 === 1) {
                        return(
                            <div className="absolute top-2 w-max">
                                <span className="text-6xl font-medium tracking-widest">{`${x + 1}-${x + 5}`}</span>
                                <div className="flex justify-end">
                                    {arrowRight}
                                </div>
                            </div>
                        )
                    } else if (index + 1 === 6) {
                        return(
                            <div className="absolute top-2 w-max">
                                <span className="text-6xl font-medium tracking-widest">{`${x + 6}-${x + 10}`}</span>
                                <div className="flex justify-end">
                                    {arrowRight}
                                </div>
                            </div>
                        )
                    } else if (index + 1 === 11) {
                        return(
                            <div className="absolute top-2 w-max">
                                <span className="text-6xl font-medium tracking-widest">{`${x + 11}-${x + 15}`}</span>
                                <div className="flex justify-end">
                                    {arrowRight}
                                </div>
                            </div>
                        )
                    } else if (index + 1 === 16) {
                        return(
                            <div className="absolute top-2 w-max">
                                <span className="text-6xl font-medium">{`${x + 16}-${x + 20}`}</span>
                                <div className="flex justify-end">
                                    {arrowRight}
                                </div>
                            </div>
                        )
                    }
                }

                return (
                    <div className={`flex w-40 flex-shrink-0 relative ${index + 1 !== items.length && 'mr-[275px]'}`} key={index}>
                        <div 
                            style={position()} key={index} 
                            className="my-auto flex-shrink-0 text-lg"
                        >
                            <img className="w-36 h-36 xxs:w-56 xxs:h-56 mb-5 shadow-zinc-500 shadow-lg art" onClick={() => handleModal(item, index)} src={item.img} alt="" />
                            <div className="flex justify-end">    
                                <p className="">{item.name}</p>
                                <div className={`rounded-md ml-3 border-black ${item.available === false && 'bg-black'} border-2 w-[10px] h-[10px]`}>
                                    {/*availability indicator*/}
                                </div>
                            </div>
                        </div>

                        {
                            part()
                        }
                    </div>
                )}
            )}
            
        </div>
    )
}

export default Art