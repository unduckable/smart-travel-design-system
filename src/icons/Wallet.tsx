import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Wallet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 6.75v10.5a2 2 0 0 0 2 2h10.5a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2v0m0 0H6.5a1.75 1.75 0 1 1 0-3.5h8.75a2 2 0 0 1 2 2z"
    />
  </svg>
);
const ForwardRef = forwardRef(Wallet);
export default ForwardRef;
