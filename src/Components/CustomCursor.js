import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  // State to track the cursor position
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update the cursor position when the mouse moves
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  // Attach event listener on mount to track mouse movement
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [])

  return (
    <div
      className="custom-cursor"
      style={{
        left: cursorPosition.x + "px",
        top: cursorPosition.y + "px",
      }}
    >

    </div>
  )
};

export default CustomCursor;
