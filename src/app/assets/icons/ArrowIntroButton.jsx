import React from 'react';

const ArrowIntroButton = ({ 
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
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      {...props}
    >
      <path 
        d="M8 7V13L13 10L8 7Z" 
        fill={color}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIntroButton;
