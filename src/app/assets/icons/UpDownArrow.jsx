import React from 'react';

const UpDownArrow = ({ 
  className = "", 
  onClick, 
  size = 14, 
  color = "#242B33",
  strokeWidth = "1.5",
  ...props 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 14 14" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      {...props}
    >
      <path 
        d="M9.33341 8.75002L7.00008 11.0834L4.66675 8.75002M4.66675 5.25002L7.00008 2.91669L9.33341 5.25002" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UpDownArrow;
