import React from 'react';

export default function ViewMoreIcon(props) {
  const {
    size = 6,
    color = "#003459",
    className = "",
    onClick,
    ...restProps
  } = props;

  return (
    <svg 
      width={size} 
      height={size * (10/6)} // Maintain aspect ratio
      viewBox="0 0 6 10" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      {...restProps}
    >
      <path 
        d="M1.33337 1.66666L4.66671 4.99999L1.33337 8.33332" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}
