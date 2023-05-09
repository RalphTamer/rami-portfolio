import { CSSProperties } from "react";

type Props = {
  color?: string;
  size?: number;
  fill?: string;
  viewBox?: string;
  strokeWidth?: number;
  style?: CSSProperties;
  name: "chevron-right" | "chevron-left";
};
const SVGIcon = (props: Props) => {
  const strokeColor = props.color || "black";
  const size = props.size || 26;
  const strokeWidth = props.strokeWidth || 1.5;
  const fill = props.fill || "none";
  let SVGFragment: null | JSX.Element = null;
  if (props.name === "chevron-left") {
    SVGFragment = (
      <>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="15 6 9 12 15 18" />
      </>
    );
  }
  if (props.name === "chevron-right") {
    SVGFragment = (
      <>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="9 6 15 12 9 18" />
      </>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler"
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      fill={fill}
      style={props.style}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {SVGFragment}
    </svg>
  );
};

export default SVGIcon;
