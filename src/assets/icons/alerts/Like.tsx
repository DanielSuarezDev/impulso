import * as React from 'react';

function SvgLike(props: any) {
  const {fill, width, height} = props;

  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M15.021 6l.336-2.041A3.044 3.044 0 0011.149.672a3.14 3.14 0 00-1.567 1.553L7.717 6H3a3 3 0 00-3 3v9a3 3 0 003 3h19.018L24 9.963 24.016 6h-8.995zM2 18V9a1 1 0 011-1h4v11H3a1 1 0 01-1-1zm20-8.3L20.33 19H9V7.909l2.419-4.9a1.07 1.07 0 011.722-.209 1.024 1.024 0 01.233.84L12.655 8H22v1.7z"
        fill={fill || '#000'}
      />
    </svg>
  );
}

const MemoSvgSvgLike = React.memo(SvgLike);
export default MemoSvgSvgLike;
