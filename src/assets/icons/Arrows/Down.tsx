import * as React from 'react';

function SvgDown(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '16px'}
      height={height || '16px'}
      fill={fill || 'none'}
      viewBox="0 0 11 7">
      <path
        fill="#676767"
        fillRule="evenodd"
        d="M1.254 1.366a1 1 0 011.414-.024L6.016 4.58l3.237-3.348a1 1 0 011.438 1.39L6.758 6.688a1 1 0 01-1.414.024L1.278 2.78a1 1 0 01-.024-1.414z"
        clipRule="evenodd"></path>
    </svg>
  );
}

const MemoSvgDown = React.memo(SvgDown);
export default MemoSvgDown;
