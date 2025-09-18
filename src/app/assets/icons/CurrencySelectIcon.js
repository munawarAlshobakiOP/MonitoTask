import React from 'react';

const CurrencySelectIcon = ({ 
  className = "",
  ...props 
}) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path 
        d="M15 11L12 14L9 11" 
        stroke="var(--color-primary-dark)" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CurrencySelectIcon;
