import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShoppingCart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.75 7.75h11.5l-1.637 6.958a2 2 0 0 1-1.947 1.542H11.54a2 2 0 0 1-1.934-1.488zm0 0-.75-3H4.75"
    />
    <path stroke="currentColor" d="M10.5 19a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM17.5 19a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
  </svg>
);
const ForwardRef = forwardRef(ShoppingCart);
export default ForwardRef;
