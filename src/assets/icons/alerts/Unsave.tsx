import * as React from 'react';

function SvgUnsave(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_5288_4295)">
        <path
          d="M20.137 24a2.799 2.799 0 01-1.987-.835L12 17.051l-6.15 6.118a2.8 2.8 0 01-3.095.609A2.8 2.8 0 011 21.154V5a5 5 0 015-5h12a5 5 0 015 5v16.154a2.8 2.8 0 01-1.751 2.624c-.352.147-.73.223-1.112.222zM6 2a3 3 0 00-3 3v16.154a.843.843 0 001.437.6l6.863-6.821a1 1 0 011.41 0l6.855 6.819a.843.843 0 001.437-.6V5a3 3 0 00-3-3H6z"
          fill={fill || '#000'}
        />
      </g>
      <defs>
        <clipPath id="clip0_5288_4295">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const MemoSvgUnsave = React.memo(SvgUnsave);
export default MemoSvgUnsave;
