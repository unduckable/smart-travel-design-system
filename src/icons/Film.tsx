import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Film = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.75 5v14m8.5-14v14M5 8.75h2.5m9.5 0h2M5 12h14M5 15.25h2.5m9.5 0h2m-12.25 4h10.5a2 2 0 0 0 2-2V6.75a2 2 0 0 0-2-2H6.75a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(Film);
export default ForwardRef;
