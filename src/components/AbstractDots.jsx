import React from "react";

export default function AbstractDots({ color = "#ffa726", count = 40 }) {
  const dots = Array.from({ length: count }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 1, // between 1px and 5px
    blur: Math.random() * 4, // small blur for smooth look
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: color,
            opacity: dot.opacity,
            filter: `blur(${dot.blur}px)`,
          }}
        />
      ))}
    </div>
  );
}
