import * as React from 'react';

function SvgOff(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_5197_4236)" fill={fill || '#000'}>
        <path d="M15 3.849a1.02 1.02 0 00.629.926A9 9 0 0121 13.292 9.001 9.001 0 113 13a9 9 0 015.371-8.224A1.023 1.023 0 009 3.848a1 1 0 00-1.374-.929 11 11 0 108.751 0 1 1 0 00-1.377.93z" />
        <path d="M13 1a1 1 0 10-2 0v6a1 1 0 102 0V1z" />
      </g>
      <defs>
        <clipPath id="clip0_5197_4236">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgOff = React.memo(SvgOff);
export default MemoSvgOff;
