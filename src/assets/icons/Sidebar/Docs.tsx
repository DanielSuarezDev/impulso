import * as React from 'react';

function SvgDocs(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M21.875 2.125h-6.004L11.704.042H7.292a3.129 3.129 0 00-3.125 3.125v15.625H25V5.25a3.129 3.129 0 00-3.125-3.125zm-14.583 0h3.92l4.167 2.083h6.496c.575 0 1.042.467 1.042 1.042v1.042H6.25V3.167c0-.575.468-1.042 1.042-1.042zM6.25 16.708V8.375h16.667v8.333H6.25zm-4.167 4.167h18.75v2.083H0V7.333A3.12 3.12 0 012.083 4.4v16.475z"
        fill={fill || '#000'}
      />
    </svg>
  );
}

const MemoSvgDocs = React.memo(SvgDocs);
export default MemoSvgDocs;
