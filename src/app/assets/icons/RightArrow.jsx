
import React from 'react';
const RightArrow = ({ 
  className = "",
  onClick,
  size = 20,
  color = "currentColor",
  strokeColor = "currentColor",
  strokeWidth = "1.5",
  ...props 
}) => {
  return (
    <svg 
      width={size}
      height={size}
viewBox="0 0 12 10"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      {...props}
    >
      <path 
 d="M1 5L11 5M11 5L7 9M11 5L7 1"
         fill={color}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrow;
