import * as React from 'react';

function SvgInfoAlert(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M12 16a8.009 8.009 0 01-8-8C4.376-2.588 19.626-2.585 20 8a8.009 8.009 0 01-8 8zm0-14c-7.929.252-7.928 11.749 0 12 7.929-.252 7.928-11.749 0-12zm1 2h-2v5h2V4zm0 6h-2v2h2v-2zm11-2A12.026 12.026 0 0021.257.363l-1.543 1.274a10.052 10.052 0 010 12.726l1.543 1.274A12.026 12.026 0 0024 8zM4.286 14.363a10.052 10.052 0 010-12.726L2.744.363a12.065 12.065 0 000 15.274l1.542-1.274z"
        fill={fill || '#000'}
      />
    </svg>
  );
}
const MemoSvgInfoAlert = React.memo(SvgInfoAlert);
export default MemoSvgInfoAlert;
