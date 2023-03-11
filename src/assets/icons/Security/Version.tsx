import * as React from 'react';

function SvgVersion(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_5194_4228)" fill={fill || '#000'}>
        <path d="M18.581 2.14L12.316.051a1 1 0 00-.632 0L5.419 2.14A4.993 4.993 0 002 6.883V12c0 7.563 9.2 11.74 9.594 11.914a1 1 0 00.812 0C12.8 23.74 22 19.563 22 12V6.883a4.993 4.993 0 00-3.419-4.743zM20 12c0 5.455-6.319 9.033-8 9.889-1.683-.853-8-4.42-8-9.889V6.883a3 3 0 012.052-2.846L12 2.054l5.948 1.983A3 3 0 0120 6.883V12z" />
        <path d="M15.3 8.3l-4.188 4.2-2.244-2.34a1.001 1.001 0 10-1.441 1.386l2.306 2.4a1.87 1.87 0 001.345.6h.033a1.872 1.872 0 001.335-.553l4.272-4.272A1.003 1.003 0 1015.3 8.3z" />
      </g>
      <defs>
        <clipPath id="clip0_5194_4228">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgVersion = React.memo(SvgVersion);
export default MemoSvgVersion;
