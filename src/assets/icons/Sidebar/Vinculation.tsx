import * as React from 'react';

function SvgBook(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width || 20}
      height={height || 20}
      {...props}
    >
      <path 
      d="M7 0H4a4 4 0 00-4 4v3a4 4 0 004 4h3a4 4 0 004-4V4a4 4 0 00-4-4zm2 7a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h3a2 2 0 012 2zM7 13H4a4 4 0 00-4 4v3a4 4 0 004 4h3a4 4 0 004-4v-3a4 4 0 00-4-4zm2 7a2 2 0 01-2 2H4a2 2 0 01-2-2v-3a2 2 0 012-2h3a2 2 0 012 2zM20 13h-3a4 4 0 00-4 4v3a4 4 0 004 4h3a4 4 0 004-4v-3a4 4 0 00-4-4zm2 7a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3a2 2 0 012-2h3a2 2 0 012 2zM14 7h3v3a1 1 0 002 0V7h3a1 1 0 000-2h-3V2a1 1 0 00-2 0v3h-3a1 1 0 000 2z" 
      fill={fill || "8F9196"}
      />
    </svg>
  );
}

const MemoSvgBook = React.memo(SvgBook);
export default MemoSvgBook;
