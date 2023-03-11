import * as React from 'react';

function SvgExclamation(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_5194_4165)" fill={fill || '#000'}>
        <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10z" />
        <path d="M12 5a1 1 0 00-1 1v8a1 1 0 002 0V6a1 1 0 00-1-1zM13 18a1 1 0 10-2 0 1 1 0 002 0z" />
      </g>
      <defs>
        <clipPath id="clip0_5194_4165">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgExclamation = React.memo(SvgExclamation);
export default MemoSvgExclamation;
