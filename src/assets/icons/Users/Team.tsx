import * as React from 'react';

function Team(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 16}
      height={height || 16}
      fill={fill || 'none'}
      viewBox="0 0 18 20">
      <path
        stroke="#676767"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 17h5v-2a3 3 0 00-5.356-1.857M16 17H6m10 0v-2c0-.656-.126-1.283-.356-1.857M6 17H1v-2a3 3 0 015.356-1.857M6 17v-2c0-.656.126-1.283.356-1.857m0 0a5.003 5.003 0 019.288 0M14 4a3 3 0 11-6 0 3 3 0 016 0v0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM6 7a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>
  );
}

export default Team;
