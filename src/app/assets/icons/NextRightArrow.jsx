import React from 'react';

const NextRightArrow = ({
  size = 16,
  color = 'white',
  className,
  onClick,
  ...props
}) => (
  <svg
    width={size * 0.625}
    height={size}
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
    style={{ transform: 'scaleX(-1)' }}
    {...props}
  >
    <path
      d="M8.16675 14.5L1.66675 8L8.16675 1.5"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default NextRightArrow;
