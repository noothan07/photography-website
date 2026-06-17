import React, { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Create a new bubble
      const newBubble = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 10 + 5, // Random size between 5-20px
      };

      setBubbles((prev) => [...prev, newBubble]);

      // Remove bubble after animation
      setTimeout(() => {
        setBubbles((prev) => prev.filter((bubble) => bubble.id !== newBubble.id));
      }, 1000);
    };

    // Throttle the event to prevent too many bubbles
    let lastMove = 0;
    const throttledHandler = (e) => {
      const now = Date.now();
      if (now - lastMove > 20) { // Create bubble every 5ms
        lastMove = now;
        handleMouseMove(e);
      }
    };

    window.addEventListener('mousemove', throttledHandler);
    return () => window.removeEventListener('mousemove', throttledHandler);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-9999 overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full animate-bubble-float"
          style={{
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
            background: 'radial-gradient(circle, rgba(255, 208, 0, 0.8) 0%, rgba(255, 208, 0, 0.4) 50%, rgba(255, 208, 0, 0) 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

export default CursorEffect;
