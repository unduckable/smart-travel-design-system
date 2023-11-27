import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Tablet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 16.75h-.5m-5 2.5h10.5a2 2 0 0 0 2-2V6.75a2 2 0 0 0-2-2H6.75a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(Tablet);
export default ForwardRef;
