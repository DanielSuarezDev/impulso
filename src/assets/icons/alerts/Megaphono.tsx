import * as React from 'react';

function SvgMegaphono(props: any) {
  const {fill, width, height} = props;

  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M22.293 15.707l-2.288-2.288 1.414-1.414 2.288 2.288-1.414 1.414zm1.414-10l-1.414-1.414-2.25 2.25 1.414 1.414 2.25-2.25zM24 9h-3v2h3V9zM8.37 17H2.739l3.111 7h1.4a2.752 2.752 0 002.514-3.868L8.37 17zM18 0v20h-2a5.006 5.006 0 00-5-5H3a3 3 0 01-3-3V8a3 3 0 013-3h8a5.006 5.006 0 005-5h2z"
        fill={fill || '#000'}
      />
    </svg>
  );
}

const MemoSvgSvgMegaphono = React.memo(SvgMegaphono);
export default MemoSvgSvgMegaphono;
