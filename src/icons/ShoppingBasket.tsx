import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShoppingBasket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.75 9.5V7.75a3 3 0 0 1 3-3h.5a3 3 0 0 1 3 3V9.5m4 .25H4.75m13.5 0-1.666 7.912a2 2 0 0 1-1.957 1.588H9.373a2 2 0 0 1-1.957-1.588L5.75 9.75z"
    />
  </svg>
);
const ForwardRef = forwardRef(ShoppingBasket);
export default ForwardRef;
