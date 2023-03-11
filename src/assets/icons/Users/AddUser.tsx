import * as React from 'react';

function SvgAddUser(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 19}
      height={height || 19}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_5194_4216)" fill={fill || '#fff'}>
        <path d="M23 11h-2V9a1 1 0 00-2 0v2h-2a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2zM9 12a6 6 0 10-6-6 6.006 6.006 0 006 6zM9 2a4 4 0 110 8 4 4 0 010-8zM9 14a9.01 9.01 0 00-9 9 1 1 0 102 0 7 7 0 1114 0 1 1 0 102 0 9.01 9.01 0 00-9-9z" />
      </g>
      <defs>
        <clipPath id="clip0_5194_4216">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgAddUser = React.memo(SvgAddUser);
export default MemoSvgAddUser;
