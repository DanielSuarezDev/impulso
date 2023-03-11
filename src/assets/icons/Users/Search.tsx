import * as React from 'react';

function SvgSearch(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_5194_4213)">
        <path
          d="M24 22.586l-6.262-6.262a10.016 10.016 0 10-1.414 1.414L22.586 24 24 22.586zM10 18a8 8 0 118-8 8.009 8.009 0 01-8 8z"
          fill={fill || '#000'}
        />
      </g>
      <defs>
        <clipPath id="clip0_5194_4213">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgSearch = React.memo(SvgSearch);
export default MemoSvgSearch;

