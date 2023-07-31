import React, { useEffect, useState, useCallback, useContext } from 'react'
import { Context } from '../Context'

const CustomCursor = () => {
    const { isHoveringButtonOrLink, setIsHoveringButtonOrLink } = useContext(Context)
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
    const [isHoveringArt, setIsHoveringArt] = useState(false)
    const [isCursorVisible, setIsCursorVisible] = useState(false)

    const handleMouseEnterButtonOrLink = (e) => {
        let targetName = e.currentTarget.className
        let name = targetName.includes('art')
        name && setIsHoveringArt(true)

        setIsHoveringButtonOrLink(true)
    }
    const handleMouseLeaveButtonOrLink = (e) => {
        setIsHoveringArt(false)
        setIsHoveringButtonOrLink(false)
    }
    const handleMouseClick = useCallback((e) => {
        let targetName = e.currentTarget.className
        let name = targetName.includes('angleBrk')
        name === false && setIsHoveringButtonOrLink(false)
        
        setIsHoveringArt(false)
    }, [])

    // Add event listeners for buttons and links
    const buttonsAndLinks = document.querySelectorAll('button, a, .art')

    buttonsAndLinks.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnterButtonOrLink)
        el.addEventListener('click', handleMouseClick)
        el.addEventListener('mouseleave', handleMouseLeaveButtonOrLink)
    })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY })
            setIsCursorVisible(true); // on render show the cursor only when the mouse moves into the viewport
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)

            // Clean up event listeners
            buttonsAndLinks.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnterButtonOrLink)
                el.removeEventListener('mouseleave', handleMouseLeaveButtonOrLink)
                el.removeEventListener('click', handleMouseClick)
            })        
        }
    }, [])

    // Check for hover support using feature detection
    const supportsHover = window.matchMedia('(hover: hover)').matches;

    if (!supportsHover || !isCursorVisible) {
        return null; // Don't render the cursor on devices that don't support hover (most mobile devices)
    }

    const cursorStyle = {
        position: 'fixed',
        top: cursorPosition.y,
        left: cursorPosition.x,
        width: isHoveringButtonOrLink ? '25px' : '11px',
        height: isHoveringButtonOrLink ? '25px' : '11px',
        border: isHoveringButtonOrLink ? 'black 1px solid' : 'none',
        opacity: isHoveringButtonOrLink ? '80%' : '100%',
        borderRadius: '50%',
        transition: isHoveringButtonOrLink ? 'width 0.2s, height 0.2s, border 0.2s, background 0.2s' : 'width 0.1s, height 0.1s, border 0.1s, background 0.1s',
        background: isHoveringButtonOrLink ? 'white' : 'black', 
        pointerEvents: 'none',
        zIndex: 9999,
    }

    return (
        <>
            {isHoveringArt ? 
                <div style={{top: cursorPosition.y, left: cursorPosition.x,}} className={`fixed flex justify-center item-center bg-white w-[25px] h-[25px] rounded-full z-[9999] pointer-events-none`}>
                    <svg className=' h-[18px] w-[18px] m-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                </div>
            :
                <div style={cursorStyle} />
            }
        </>
    )
}

export default CustomCursor
