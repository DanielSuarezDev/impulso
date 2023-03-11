import * as React from 'react';

function SvgPlane(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M1.504 6.947a2.083 2.083 0 00-.9 3.476l3.553 3.55v6.86h6.868l3.578 3.573a2.07 2.07 0 001.998.544 2.06 2.06 0 001.48-1.436L24.99.021 1.504 6.947zm.58 2.003L19.82 3.72 6.243 17.278V13.11l-4.16-4.16zm14 13.983l-4.195-4.183H7.722L21.298 5.185l-5.215 17.748z"
        fill={fill || '#000'}
      />
    </svg>
  );
}

const MemoSvgPlane = React.memo(SvgPlane);
export default MemoSvgPlane;
