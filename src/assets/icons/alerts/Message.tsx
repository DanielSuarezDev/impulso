import * as React from 'react';

function SvgMessage(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_5194_4159)" fill={fill || '#000'}>
        <path d="M24 24H12.018A12 12 0 1124 11.246V24zM12.018 2a10 10 0 000 20H22V11.341A10.018 10.018 0 0012.018 2z" />
        <path d="M13 7H7v2h6V7zM17 11H7v2h10v-2zM17 15H7v2h10v-2z" />
      </g>
      <defs>
        <clipPath id="clip0_5194_4159">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgMessage = React.memo(SvgMessage);
export default MemoSvgMessage;
