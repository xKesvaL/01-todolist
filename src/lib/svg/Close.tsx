import { SvgItem } from "@/typings";

export default function Close({ width, height, stroke }: SvgItem) {
  return (
    <svg
      width={width || "48px"}
      height={height || "48px"}
      viewBox="0 0 24 24"
      strokeWidth="2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
        stroke={stroke || "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
