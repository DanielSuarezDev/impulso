import * as React from 'react';

function SvgUserGroup(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_5194_4211)">
        <path
          d="M7.5 13a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-7a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM15 23v-.5a7.5 7.5 0 00-15 0v.5a1 1 0 102 0v-.5a5.5 5.5 0 0111 0v.5a1 1 0 002 0zm9-5a7 7 0 00-11.667-5.217 1 1 0 101.334 1.49A5 5 0 0122 18a1 1 0 002 0zm-6.5-9a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-7a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
          fill={fill || '#000'}
        />
      </g>
      <defs>
        <clipPath id="clip0_5194_4211">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgUserGroup = React.memo(SvgUserGroup);
export default MemoSvgUserGroup;
