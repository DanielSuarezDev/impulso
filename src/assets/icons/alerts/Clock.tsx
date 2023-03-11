import * as React from 'react';

function SvgClock(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 16}
      height={height || 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_5291_4299)" fill={fill || '#155DE9'}>
        <path d="M8.667 1.367v-.7a.667.667 0 00-1.334 0v.7a7.32 7.32 0 00-4.879 12.084 2.016 2.016 0 00-1.12 1.882.667.667 0 101.333 0 .8.8 0 01.74-.819.622.622 0 00.133-.041 7.283 7.283 0 008.927 0c.039.018.08.032.121.042a.8.8 0 01.745.818.667.667 0 101.334 0 2.015 2.015 0 00-1.121-1.882 7.32 7.32 0 00-4.88-12.084zM2 8.667a6 6 0 116 6 6.008 6.008 0 01-6-6zM12.81 0a.667.667 0 100 1.333A1.727 1.727 0 0114.667 3 .667.667 0 0016 3a3.068 3.068 0 00-3.19-3zM1.333 3A1.727 1.727 0 013.19 1.333.667.667 0 003.19 0 3.067 3.067 0 000 3a.667.667 0 101.333 0z" />
        <path d="M8.667 7.724V4.667a.667.667 0 00-1.334 0V8c0 .177.07.346.196.471l2 2a.666.666 0 00.942-.942L8.667 7.724z" />
      </g>
      <defs>
        <clipPath id="clip0_5291_4299">
          <path fill="#fff" d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgClock = React.memo(SvgClock);
export default MemoSvgClock;
