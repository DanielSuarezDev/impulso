import * as React from 'react';

function SvgHouse(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M13.894.541a2.07 2.07 0 00-2.788 0L0 10.66v10.966c0 .895.351 1.753.976 2.386A3.313 3.313 0 003.333 25h18.334c.884 0 1.732-.355 2.357-.988A3.395 3.395 0 0025 21.626V10.66L13.894.54zm1.731 22.347h-6.25v-5.3c0-.838.33-1.643.915-2.236a3.106 3.106 0 012.21-.927c.829 0 1.624.333 2.21.927.586.593.915 1.398.915 2.236v5.3zm7.292-1.265c0 .335-.132.657-.366.894-.235.238-.553.371-.884.371h-3.959v-5.3c0-1.398-.548-2.739-1.525-3.728a5.176 5.176 0 00-3.683-1.544 5.177 5.177 0 00-3.683 1.544 5.305 5.305 0 00-1.525 3.728v5.3H3.333c-.331 0-.65-.133-.884-.37a1.273 1.273 0 01-.366-.895V11.598L12.5 2.108l10.417 9.49v10.025z"
        fill={fill || '#000'}
      />
    </svg>
  );
}

const MemoSvgHouse = React.memo(SvgHouse);
export default MemoSvgHouse;
