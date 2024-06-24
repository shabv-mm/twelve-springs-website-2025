import React, { useState } from 'react';

const CustomIcon = ({ color }) => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.4">
      <path d="M9.73242 12.6833L11.8658 10.55L9.73242 8.41663" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.33301 10.5496H11.808" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <path d="M10 3.83337C13.6833 3.83337 16.6667 6.33337 16.6667 10.5C16.6667 14.6667 13.6833 17.1667 10 17.1667" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HoverableIcon = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'inline-block',marginTop:'6.5px' }}
    >
      <CustomIcon color={hovered ? 'white' : 'black'} />
    </div>
  );
};

export default HoverableIcon;
