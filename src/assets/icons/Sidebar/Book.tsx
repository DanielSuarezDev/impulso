import * as React from 'react';

function SvgBook(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 21 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M15.708 0H5.292A5.214 5.214 0 00.083 5.208v15.625A4.17 4.17 0 004.25 25h11.458a5.214 5.214 0 005.209-5.208V5.208A5.214 5.214 0 0015.708 0zm3.125 5.208v11.459h-12.5V2.083H10.5v8.695c0 .65.824.927 1.218.412l1.386-1.816 1.387 1.816c.393.515 1.217.237 1.217-.412V2.083a3.129 3.129 0 013.125 3.125zM4.25 2.275v14.392c-.763 0-1.468.22-2.083.579V5.208A3.12 3.12 0 014.25 2.275zm11.458 20.642H4.25c-2.739-.05-2.736-4.12 0-4.167h14.583v1.042a3.129 3.129 0 01-3.125 3.125z"
        fill={fill || '#000'}
      />
    </svg>
  );
}

const MemoSvgBook = React.memo(SvgBook);
export default MemoSvgBook;
