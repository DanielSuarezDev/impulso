import * as React from 'react';

function SvgEye(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M23.821 8.181C22.943 6.261 19.5 0 12 0S1.057 6.261.179 8.181a1.969 1.969 0 000 1.64C1.057 11.739 4.5 18 12 18s10.943-6.261 11.821-8.181a1.968 1.968 0 000-1.638zM12 16c-6.307 0-9.25-5.366-10-6.989C2.75 7.366 5.693 2 12 2c6.292 0 9.236 5.343 10 7-.764 1.657-3.708 7-10 7z"
        fill={fill || '#000'}
      />
      <path
        d="M12 4a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-5.999A3 3 0 0112 12z"
        fill={fill || '#000'}
      />
    </svg>
  );
}

const MemoSvgEye = React.memo(SvgEye);
export default MemoSvgEye;
