import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Menu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 5.75h14.5m-14.5 12.5h14.5M4.75 12h14.5"
    />
  </svg>
);
const ForwardRef = forwardRef(Menu);
export default ForwardRef;
