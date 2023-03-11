import * as React from 'react';

function SvgMore(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_5194_4186)" fill={fill || '#000'}>
        <path d="M4.688 9.115H2.083A2.083 2.083 0 000 11.198v2.604a2.083 2.083 0 002.083 2.083h2.604a2.083 2.083 0 002.084-2.083v-2.604a2.083 2.083 0 00-2.083-2.083zm0 4.687H2.083v-2.604h2.604v2.604zM22.917 9.115h-2.605a2.083 2.083 0 00-2.083 2.083v2.604a2.083 2.083 0 002.084 2.083h2.604A2.083 2.083 0 0025 13.802v-2.604a2.083 2.083 0 00-2.083-2.083zm0 4.687h-2.605v-2.604h2.605v2.604zM13.802 9.115h-2.604a2.083 2.083 0 00-2.083 2.083v2.604a2.083 2.083 0 002.083 2.083h2.604a2.083 2.083 0 002.083-2.083v-2.604a2.083 2.083 0 00-2.083-2.083zm0 4.687h-2.604v-2.604h2.604v2.604z" />
      </g>
      <defs>
        <clipPath id="clip0_5194_4186">
          <path fill="#fff" d="M0 0H25V25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgMore = React.memo(SvgMore);
export default MemoSvgMore;
