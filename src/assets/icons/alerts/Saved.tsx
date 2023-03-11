import * as React from 'react';

function SvgSaved(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_5289_4297)">
        <path
          d="M2.849 23.55a2.954 2.954 0 003.266-.644L12 17.053l5.885 5.853a2.956 2.956 0 003.27.644A2.954 2.954 0 0023 20.779V5a5.006 5.006 0 00-5-5H6a5.006 5.006 0 00-5 5v15.779a2.953 2.953 0 001.849 2.771z"
          fill={fill || '#000'}
        />
      </g>
      <defs>
        <clipPath id="clip0_5289_4297">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgSaved = React.memo(SvgSaved);
export default MemoSvgSaved;
