import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Box = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 8 12 4.75 19.25 8M4.75 8 12 11.25 19.25 8M4.75 8v8L12 19.25 19.25 16V8M12 11.5V19"
    />
  </svg>
);
const ForwardRef = forwardRef(Box);
export default ForwardRef;
