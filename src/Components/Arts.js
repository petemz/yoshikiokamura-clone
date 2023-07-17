import homeImg from "../Assets/home-img.jpg"

const Art = () => {
    const items = [
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
        {name: 'Hazuki', img: homeImg, available: true},
    ]

    return (
        <div className="flex w-max px-60">
            {items.map((item, index) => {
                const position = () => {
                    if (index % 4 === 1) {
                        return {marginBottom: '350px', }
                    } else if (index % 4 === 3) {
                        return {marginTop: '350px', }
                    } else {
                    }
                }

                return (
                    <div style={position()} key={index} className={`${index + 1 !== items.length && 'mr-[275px]'} my-auto text-lg text-right`}>
                        <img className="w-36 h-36 mb-2" src={item.img} alt="" />
                        <p className="">{item.name}</p>
                    </div>
                )}
            )}
            
        </div>
    )
}

export default Art