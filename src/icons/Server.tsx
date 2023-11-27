import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Server = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.25 5v5m0 4v5m-10.5-8.75h12.5a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1H5.75a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1m0 9h12.5a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1H5.75a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1"
    />
  </svg>
);
const ForwardRef = forwardRef(Server);
export default ForwardRef;
