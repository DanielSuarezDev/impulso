import * as React from 'react';

function Support(props: any) {
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
        d="M5 5h10M5 9h4m1 8l-4-4H3a2 2 0 01-2-2V3a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
    </svg>
  );
}

export default Support;
