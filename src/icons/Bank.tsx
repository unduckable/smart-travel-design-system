import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Bank = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.25 11.5v7.75m-12.5 0V11.5m4 7.75V11.5m4.5 7.75V11.5m-9.5 7.75h14.5m0-8L12 4.75l-7.25 6.5z"
    />
  </svg>
);
const ForwardRef = forwardRef(Bank);
export default ForwardRef;
