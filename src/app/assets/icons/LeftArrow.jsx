import React from 'react';
const LeftArrow = ({ 
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
      d="M11 5L1 5M1 5L5 9M1 5L5 1"
        fill={color}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LeftArrow;
