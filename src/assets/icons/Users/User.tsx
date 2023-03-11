import * as React from 'react';

function SvgUser(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_5194_4205)" fill={fill || '#000'}>
        <path d="M12 12a6 6 0 10-6-6 6.006 6.006 0 006 6zm0-10a4 4 0 110 8 4 4 0 010-8zM12 14a9.01 9.01 0 00-9 9 1 1 0 102 0 7 7 0 1114 0 1 1 0 002 0 9.01 9.01 0 00-9-9z" />
      </g>
      <defs>
        <clipPath id="clip0_5194_4205">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgUser = React.memo(SvgUser);
export default MemoSvgUser;
