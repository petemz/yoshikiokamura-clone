import React, { useEffect, useState, useCallback, useContext } from 'react'
import { Context } from '../Context'

const CustomCursor = () => {
    const { isHoveringButtonOrLink, setIsHoveringButtonOrLink } = useContext(Context)
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

    const handleMouseEnterButtonOrLink = () => {
        setIsHoveringButtonOrLink(true)
    }
    const handleMouseLeaveButtonOrLink = () => {
        setIsHoveringButtonOrLink(false)
    }
    const handleMouseClick = useCallback((e) => {
        
        let targetName = e.currentTarget.className
        let name = targetName.includes('angleBrk')
        name === false && setIsHoveringButtonOrLink(false)
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
console.log(isHoveringButtonOrLink)
  // Customize your cursor design here using HTML/SVG elements or CSS
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
        background: isHoveringButtonOrLink ? 'white' : 'black', // Change the cursor color if hovering over a button or link
        pointerEvents: 'none',
        zIndex: 9999,
    }

    return <div className="custom-cursor" style={cursorStyle} />
}

export default CustomCursor
