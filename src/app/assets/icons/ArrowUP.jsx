import React from 'react';

const ArrowUP = ({ 
  className = "", 
  onClick, 
  size = 20, 
  color = "var(--color-neutral-60)",
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
        d="M13.3334 11.6666L10.0001 8.33329L6.66675 11.6666" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUP;