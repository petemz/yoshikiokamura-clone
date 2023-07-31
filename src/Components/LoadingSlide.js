import { useEffect, useState } from "react"

const LoadingSlide = () => {
    const [width, setWidth] = useState('0%')

    useEffect(() => {
        setWidth('100%')
    }, [])

    return (
        <div style={{  }} className='flex justify-center transition-all duration-[200ms] items-center px-[10%] bg-white w-screen h-screen fixed top-0 z-[1000]'>
            <div className='w-full flex h-[1px] bg-zinc-100'>
                <div
                    style={{ width: width }}
                    className="transition-all duration-[1000ms] bg-black"
                />
            </div>
        </div>
    )
}

export default LoadingSlide
