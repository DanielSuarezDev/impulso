import React from 'react';

function Email(props: any) {
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
        d="M1 4l7.89 5.26a2 2 0 002.22 0L19 4M3 15h14a2 2 0 002-2V3a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
  );
}

export default Email;
