import * as React from 'react';

function SvgNoteBook(props: any) {
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
        d="M21.333 2V0h-2.666v2H16V0h-2.667v2h-2.666V0H8v2H5.333V0H2.667v2H0v19c0 .796.421 1.559 1.172 2.121.75.563 1.767.879 2.828.879h16c1.06 0 2.078-.316 2.828-.879C23.578 22.56 24 21.796 24 21V2h-2.667zm0 19c0 .265-.14.52-.39.707-.25.188-.59.293-.943.293H4c-.354 0-.693-.105-.943-.293-.25-.187-.39-.442-.39-.707V4h18.666v17zM18.667 9H5.333V7h13.334v2zm0 4H5.333v-2h13.334v2zm-5.334 4h-8v-2h8v2z"
        fill={fill || '#000'}
      />
    </svg>
  );
}

const MemoSvgNoteBook = React.memo(SvgNoteBook);
export default MemoSvgNoteBook;
