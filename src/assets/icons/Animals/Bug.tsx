import * as React from 'react';

function SvgBug(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
      width={width || 22}
      height={height || 24}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_5194_4220)">
        <path
          d="M20.167 7c.486 0 .952-.21 1.296-.586C21.807 6.04 22 5.53 22 5V1c0-.265-.097-.52-.268-.707A.88.88 0 0021.082 0a.88.88 0 00-.648.293 1.048 1.048 0 00-.268.707v4H16.5c-.017 0-.03.009-.046.01-.438-1.185-1.191-2.2-2.162-2.915A5.537 5.537 0 0011.005 1a5.537 5.537 0 00-3.287 1.096A6.334 6.334 0 005.555 5.01C5.535 5.011 5.519 5 5.5 5H1.833V1c0-.265-.096-.52-.268-.707A.88.88 0 00.917 0a.88.88 0 00-.649.293A1.048 1.048 0 000 1v4c0 .53.193 1.04.537 1.414.344.375.81.586 1.296.586h3.195l-.929 4H.917a.88.88 0 00-.649.293A1.048 1.048 0 000 12c0 .265.097.52.268.707A.88.88 0 00.917 13h2.718l-.133.573-.019.127c-.04.342-.062.687-.064 1.032.001.767.1 1.53.296 2.268H1.833c-.486 0-.952.21-1.296.586A2.096 2.096 0 000 19v4c0 .265.097.52.268.707A.88.88 0 00.917 24a.88.88 0 00.648-.293c.172-.187.268-.442.268-.707v-4H4.52a7.913 7.913 0 002.758 2.93A7.078 7.078 0 0011 23a7.078 7.078 0 003.723-1.07A7.913 7.913 0 0017.481 19h2.686v4c0 .265.096.52.268.707a.88.88 0 00.648.293.88.88 0 00.649-.293c.171-.187.268-.442.268-.707v-4c0-.53-.193-1.04-.537-1.414A1.76 1.76 0 0020.167 17h-1.882a8.893 8.893 0 00.298-2.273 9.126 9.126 0 00-.066-1.027l-.16-.7h2.726a.88.88 0 00.649-.293c.171-.187.268-.442.268-.707 0-.265-.097-.52-.268-.707a.88.88 0 00-.649-.293h-3.188l-.925-4h3.197zM11 21c-1.524-.002-2.986-.663-4.064-1.84-1.078-1.175-1.684-2.77-1.685-4.433 0-.243.015-.486.043-.727l1.86-8.03a4.432 4.432 0 011.482-2.146A3.851 3.851 0 0110.98 3a3.846 3.846 0 012.352.799 4.421 4.421 0 011.5 2.13L16.707 14c.028.24.042.483.043.725 0 1.663-.607 3.258-1.684 4.435-1.078 1.176-2.54 1.838-4.065 1.84z"
          fill={fill || '#000'}
        />
      </g>
      <defs>
        <clipPath id="clip0_5194_4220">
          <path fill="#fff" d="M0 0H22V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgBug = React.memo(SvgBug);
export default MemoSvgBug;
