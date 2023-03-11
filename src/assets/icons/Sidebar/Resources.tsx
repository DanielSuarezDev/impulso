import * as React from 'react';

function SvgResources(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={25}
      height={25}
      {...props}
    >
      <path d="M23 3H13a1 1 0 00-1 1v3.27L9.6 3.11a2 2 0 00-3.47 0l-6 10.39a1 1 0 000 1A1 1 0 001 15h4.29A6.91 6.91 0 005 17a7 7 0 0014 0 6.91 6.91 0 00-.29-2H23a1 1 0 001-1V4a1 1 0 00-1-1zM2.73 13l5.13-8.89L11.29 10a7 7 0 00-5 3zM12 22a5 5 0 115-5 5 5 0 01-5 5zm10-9h-4.26A7.07 7.07 0 0014 10.29V5h8z" />
    </svg>
  );
}

const MemoSvgResources = React.memo(SvgResources);
export default MemoSvgResources;
