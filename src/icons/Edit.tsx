import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Edit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 19.25h-5.5m-4.75-1-4.25 1 1-4.25 9.293-9.293a1 1 0 0 1 1.414 0l1.836 1.836a1 1 0 0 1 0 1.414z"
    />
  </svg>
);
const ForwardRef = forwardRef(Edit);
export default ForwardRef;
