import * as React from 'react';

function SvgMenuBar(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
    width={width || 27}
    height={height || 26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.05 5.2c0-.345.142-.675.395-.92.254-.243.597-.38.955-.38h16.2c.358 0 .701.137.955.38.253.245.395.575.395.92 0 .345-.142.675-.395.92-.253.243-.597.38-.955.38H5.4c-.358 0-.701-.137-.955-.38a1.276 1.276 0 0 1-.395-.92Zm0 5.2c0-.345.142-.675.395-.92.254-.243.597-.38.955-.38h16.2c.358 0 .701.137.955.38.253.245.395.575.395.92 0 .345-.142.675-.395.92-.253.243-.597.38-.955.38H5.4c-.358 0-.701-.137-.955-.38a1.276 1.276 0 0 1-.395-.92Zm0 5.2c0-.345.142-.675.395-.92.254-.243.597-.38.955-.38h16.2c.358 0 .701.137.955.38.253.245.395.575.395.92 0 .345-.142.675-.395.92-.253.243-.597.38-.955.38H5.4c-.358 0-.701-.137-.955-.38a1.276 1.276 0 0 1-.395-.92Zm0 5.2c0-.345.142-.675.395-.92.254-.243.597-.38.955-.38h16.2c.358 0 .701.137.955.38.253.245.395.575.395.92 0 .345-.142.675-.395.92-.253.243-.597.38-.955.38H5.4c-.358 0-.701-.137-.955-.38a1.276 1.276 0 0 1-.395-.92Z"
      fill={fill || "#000"}
    />
  </svg>
  );
}

const MemoSvgMenuBar = React.memo(SvgMenuBar);
export default MemoSvgMenuBar;
