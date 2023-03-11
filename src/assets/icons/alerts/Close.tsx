import * as React from 'react';

function SvgClose(props: any) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24a12 12 0 100-24 12 12 0 000 24zM10.06 7.94a1.5 1.5 0 00-2.12 2.12L9.878 12l-1.94 1.94a1.5 1.5 0 102.121 2.12L12 14.122l1.94 1.94a1.5 1.5 0 002.12-2.121L14.122 12l1.94-1.94a1.5 1.5 0 00-2.121-2.12L12 9.878l-1.94-1.94z"
        fill={fill || '#000'}
      />
    </svg>
  );
}

const MemoSvgClose = React.memo(SvgClose);
export default MemoSvgClose;
