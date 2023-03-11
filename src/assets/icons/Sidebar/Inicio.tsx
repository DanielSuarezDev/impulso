import * as React from 'react';

function SvgInicio(props: any) {
  const {fill, width, height} = props;
  return (
    <svg
    width={width || 25}
    height={height || 25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h25v25H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.00195)" />
      </pattern>
      <image
        id="b"
        width={512}
        height={512}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
  );
}

const MemoSvgInicio = React.memo(SvgInicio);
export default MemoSvgInicio;