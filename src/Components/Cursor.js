import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringButtonOrLink, setIsHoveringButtonOrLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnterButtonOrLink = () => {
      setIsHoveringButtonOrLink(true);
    };

    const handleMouseLeaveButtonOrLink = () => {
      setIsHoveringButtonOrLink(false);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Add event listeners for buttons and links
    const buttonsAndLinks = document.querySelectorAll('button, a, .art');
    buttonsAndLinks.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterButtonOrLink);
      el.addEventListener('mouseleave', handleMouseLeaveButtonOrLink);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);

      // Clean up event listeners
      buttonsAndLinks.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterButtonOrLink);
        el.removeEventListener('mouseleave', handleMouseLeaveButtonOrLink);
      });
    };
  }, []);

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
    transition: isHoveringButtonOrLink ? 'width 0.2s, height 0.2s, border 0.2s, background 0.2s' : 'none',
    background: isHoveringButtonOrLink ? 'white' : 'black', // Change the cursor color if hovering over a button or link
    pointerEvents: 'none',
    zIndex: 9999,
  };

  return <div className="custom-cursor" style={cursorStyle} />;
};

export default CustomCursor;
