import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TableRows = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 9.25h-14m14 5.5h-14m13 4.5H5.75a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1h12.5a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1"
    />
  </svg>
);
const ForwardRef = forwardRef(TableRows);
export default ForwardRef;
