import * as React from 'react';

function Right(props: any) {
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
        d="M1 1l7 7-7 7"></path>
    </svg>
  );
}

export default Right;
