import * as React from 'react';

function Dark(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 16}
      height={height || 16}
      fill={fill || 'none'}
      viewBox="0 0 18 20">
      <path
        stroke="#676767"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 1v1m0 16v1m9-9h-1M2 10H1m15.364 6.364l-.707-.707M4.343 4.343l-.707-.707m12.728 0l-.707.707M4.343 15.657l-.707.707M14 10a4 4 0 11-8 0 4 4 0 018 0v0z"></path>
    </svg>
  );
}

export default Dark;
