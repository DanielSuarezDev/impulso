import * as React from 'react';

function SvgInfo(props: any) {
  const {fill, width, height} = props;

  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_5014_3627)" fill={fill || '#000'}>
        <path d="M12 24a12 12 0 1112-12 12.013 12.013 0 01-12 12zm0-22a10 10 0 1010 10A10.011 10.011 0 0012 2z" />
        <path d="M14 19h-2v-7h-2v-2h2a2 2 0 012 2v7zM12 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </g>
      <defs>
        <clipPath id="clip0_5014_3627">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgInfo = React.memo(SvgInfo);
export default MemoSvgInfo;
