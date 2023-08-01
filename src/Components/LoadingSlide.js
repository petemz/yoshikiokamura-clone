import { useEffect, useState } from "react"

const LoadingSlide = () => {
    const [width, setWidth] = useState('0%')

    useEffect(() => {
        setWidth('100%')
    }, [])

    return (
        <div className='flex justify-center items-center transition-all duration-[200ms] px-[10%] bg-white w-screen h-screen fixed top-0 z-[1000]'>
            <div className='w-full flex h-[0.02cm] bg-zinc-100'>
                <div
                    style={{ width: width }}
                    className="transition-all duration-[1000ms] bg-black"
                />
            </div>
        </div>
    )
}

export default LoadingSlide
