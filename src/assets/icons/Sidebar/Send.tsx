import * as React from "react";

function SvgSend(props: any) {
  const { fill, width, height } = props;
  return (
    <svg
      width={width || 16}
      height={height || 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_6188_3112)">
        <path
          d="M1.172 4.446a1.283 1.283 0 00-.57.35A1.376 1.376 0 00.28 6.078c.06.225.175.43.333.594l2.202 2.272v4.39H7.07l2.217 2.287a1.247 1.247 0 001.238.348c.217-.057.416-.171.577-.333.16-.161.278-.363.339-.586L15.722.014 1.172 4.446zm.358 1.282l10.99-3.347-8.413 8.676V8.391L1.53 5.728zm8.674 8.95L7.605 12H5.024l8.41-8.681-3.23 11.358z"
          fill={fill || "#676767"}
        />
      </g>
      <defs>
        <clipPath id="clip0_6188_3112">
          <path fill="#fff" transform="translate(.24)" d="M0 0H15.488V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgSend = React.memo(SvgSend);
export default MemoSvgSend;
