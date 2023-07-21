import homeImg from "../Assets/home-img.jpg"
import art1 from "../Assets/Arts/art-1.jpg"
import art2 from "../Assets/Arts/art-2.jpg"
import art3 from "../Assets/Arts/art-3.jpg"
import art4 from "../Assets/Arts/art-4.jpg"
import art5 from "../Assets/Arts/art-5.jpg"
import art6 from "../Assets/Arts/art-6.jpg"
import art7 from "../Assets/Arts/art-7.jpg"
import art8 from "../Assets/Arts/art-8.jpg"
import art9 from "../Assets/Arts/art-9.jpg"
import art10 from "../Assets/Arts/art-10.jpg"

const Art = () => {
    const items = [
        {name: 'sandy beach', img: homeImg, available: true},
        {name: 'seaside', img: art1, available: false},
        {name: 'flying fish', img: art2, available: true},
        {name: 'summer wave', img: art3, available: true},
        {name: 'blue storm', img: art4, available: true},
        {name: 'hydrangea', img: art5, available: true},
        {name: 'ruby', img: art6, available: true},
        {name: 'mercury', img: art7, available: false},
        {name: 'wisteria purple', img: art8, available: true},
        {name: 'Fukuroda', img: art9, available: true},
        {name: 'Sun wheel', img: art10, available: true},
        {name: 'sandy beach', img: homeImg, available: true},
        {name: 'seaside', img: art1, available: true},
        {name: 'flying fish', img: art2, available: false},
        {name: 'summer wave', img: art3, available: true},
        {name: 'blue storm', img: art4, available: true},
        {name: 'hydrangea', img: art5, available: false},
        {name: 'ruby', img: art6, available: true},
        {name: 'mercury', img: art7, available: false},
        {name: 'wisteria purple', img: art8, available: true},
        {name: 'Fukuroda', img: art9, available: true},
        {name: 'Sun wheel', img: art10, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'sandy beach', img: homeImg, available: true},
        {name: 'seaside', img: art1, available: true},
        {name: 'flying fish', img: art2, available: true},
        {name: 'summer wave', img: art3, available: true},
        {name: 'blue storm', img: art4, available: false},
        {name: 'hydrangea', img: art5, available: false},
        {name: 'ruby', img: art6, available: true},
        {name: 'mercury', img: art7, available: true},
        {name: 'wisteria purple', img: art8, available: true},
        {name: 'Fukuroda', img: art9, available: true},
        {name: 'Sun wheel', img: art10, available: true},
        {name: 'sandy beach', img: homeImg, available: true},
        {name: 'seaside', img: art1, available: false},
        {name: 'flying fish', img: art2, available: true},
        {name: 'summer wave', img: art3, available: true},
        {name: 'blue storm', img: art4, available: true},
        {name: 'hydrangea', img: art5, available: true},
    ]

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
                    if (index + 1 === 1) {
                        return(
                            <div className="absolute top-0">
                                <span className="text-6xl font-medium tracking-widest">1-5</span>
                                <div className="flex justify-end">
                                    {arrowRight}
                                </div>
                            </div>
                        )
                    } else if (index + 1 === 6) {
                        return(
                            <div className="absolute top-0">
                                <span className="text-6xl font-medium tracking-widest">6-10</span>
                                <div className="flex justify-end">
                                    {arrowRight}
                                </div>
                            </div>
                        )
                    } else if (index + 1 === 11) {
                        return(
                            <div className="absolute top-0">
                                <span className="text-6xl font-medium tracking-widest">11-15</span>
                                <div className="flex justify-end">
                                    {arrowRight}
                                </div>
                            </div>
                        )
                    } else if (index + 1 === 16) {
                        return(
                            <div className="absolute top-0">
                                <span className="text-6xl font-medium">16-20</span>
                                <div className="flex justify-end">
                                    {arrowRight}
                                </div>
                            </div>
                        )
                    } else if (index + 1 === 21) {
                        return(
                            <div className="absolute top-0">
                                <span className="text-6xl font-medium">21-25</span>
                                <div className="flex justify-end">
                                    {arrowRight}
                                </div>
                            </div>
                        )
                    } else if (index + 1 === 26) {
                        return(
                            <div className="absolute top-0">
                                <span className="text-6xl font-medium">26-30</span>
                                <div className="flex justify-end">
                                    {arrowRight}
                                </div>
                            </div>
                        )
                    } else if (index + 1 === 31) {
                        return(
                            <div className="absolute top-0">
                                <span className="text-6xl font-medium">31-35</span>
                                <div className="flex justify-end">
                                    {arrowRight}
                                </div>
                            </div>
                        )
                    } else if (index + 1 === 36) {
                        return(
                            <div className="absolute top-0">
                                <span className="text-6xl font-medium">36-40</span>
                                <div className="flex justify-end">
                                    {arrowRight}
                                </div>
                            </div>
                        )
                    }
                }

                return (
                    <div className={`flex w-40 flex-shrink-0 relative ${index + 1 !== items.length && 'mr-[275px]'}`}>
                        <div style={position()} key={index} className="my-auto text-lg">
                            <img className="w-36 h-36 mb-2" src={item.img} alt="" />
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