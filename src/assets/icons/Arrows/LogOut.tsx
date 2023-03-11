import * as React from 'react';

function SvgLogOut(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M22.83 9.172l-3.878-3.879a1 1 0 00-1.414 1.414l3.879 3.879c.115.117.216.248.3.39-.015 0-.027-.008-.042-.008L5.991 11a1 1 0 100 2l15.678-.032c.028 0 .051-.014.078-.016a2 2 0 01-.334.462l-3.879 3.879a1 1 0 101.414 1.414l3.879-3.879a4 4 0 000-5.656h.004z"
        fill={fill || '#000'}
      />
      <path
        d="M7.002 22h-2a3 3 0 01-3-3V5a3 3 0 013-3h2a1 1 0 000-2h-2a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h2a1 1 0 100-2z"
        fill={fill || '#000'}
      />
    </svg>
  );
}

const MemoSvgLogOut = React.memo(SvgLogOut);
export default MemoSvgLogOut;
