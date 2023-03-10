import React from 'react';

function Telephone(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '16'}
      height={height || '16'}
      fill={fill || 'none'}
      viewBox="0 0 20 16">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 3a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V17a2 2 0 01-2 2h-1C7.716 19 1 12.284 1 4V3z"></path>
    </svg>
  );
}

export default Telephone;
