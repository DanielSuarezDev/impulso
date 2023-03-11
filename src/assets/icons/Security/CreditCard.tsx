import * as React from 'react';

function SvgCreditCard(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_5194_4231)" fill={fill || '#000'}>
        <path d="M5.5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        <path d="M19 3H5a5.006 5.006 0 00-5 5v8a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V8a5.006 5.006 0 00-5-5zM5 5h14a3 3 0 013 3H2a3 3 0 013-3zm14 14H5a3 3 0 01-3-3v-6h20v6a3 3 0 01-3 3z" />
      </g>
      <defs>
        <clipPath id="clip0_5194_4231">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgCreditCard = React.memo(SvgCreditCard);
export default MemoSvgCreditCard;
