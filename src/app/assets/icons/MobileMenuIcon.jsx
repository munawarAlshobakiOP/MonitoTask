import React from 'react';

const MobileMenuIcon = ({ 
  className = "",
  onClick,
  ...props 
}) => {
  return (
    <svg 
      viewBox="0 0 32 33" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      {...props}
    >
      <path 
        d="M6.66663 23.1666H25.3333M6.66663 16.4999H25.3333M6.66663 9.83325H25.3333" 
        stroke="var(--color-primary-dark)" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MobileMenuIcon;
