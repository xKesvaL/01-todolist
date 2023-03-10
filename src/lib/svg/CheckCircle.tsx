import { SvgItem } from "@/typings";

export default function CheckCircle({ width, height, stroke }: SvgItem) {
  return (
    <svg
      width={width || "48px"}
      height={height || "48px"}
      strokeWidth="2"
      stroke={stroke || "currentColor"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 12.5l3 3 7-7"></path>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
    </svg>
  );
}
