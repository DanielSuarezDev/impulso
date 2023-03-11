import * as React from 'react';

function SvgBack(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M2 7l-.707-.707L.586 7l.707.707L2 7zm15 1a1 1 0 100-2v2zM7.293.293l-6 6 1.414 1.414 6-6L7.293.293zm-6 7.414l6 6 1.414-1.414-6-6-1.414 1.414zM2 8h15V6H2v2z"
        fill={fill || '#000'}
      />
    </svg>
  );
}

const MemoSvgBack = React.memo(SvgBack);
export default MemoSvgBack;
