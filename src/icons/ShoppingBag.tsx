import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShoppingBag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 7.75h12.5m-12.5 0v9l-1 2.5h14.5l-1-2.5v-9m-12.5 0 2-3h8.5l2 3m-8.5 3v1a2.25 2.25 0 0 0 4.5 0v-1"
    />
  </svg>
);
const ForwardRef = forwardRef(ShoppingBag);
export default ForwardRef;
