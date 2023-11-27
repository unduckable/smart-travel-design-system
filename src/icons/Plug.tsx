import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Plug = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 19.25 8.5 15.5m5.25-8.25 2.5-2.5m.5 5.5 2.5-2.5m-7.281-2.031 6.312 6.312a1 1 0 0 1-.249 1.596L11 17.25 6.75 13l3.623-7.032a1 1 0 0 1 1.596-.25"
    />
  </svg>
);
const ForwardRef = forwardRef(Plug);
export default ForwardRef;
