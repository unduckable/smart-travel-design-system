import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Shield = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 4.75 4.75 8S4 19.25 12 19.25 19.25 8 19.25 8L12 4.75"
    />
  </svg>
);
const ForwardRef = forwardRef(Shield);
export default ForwardRef;
