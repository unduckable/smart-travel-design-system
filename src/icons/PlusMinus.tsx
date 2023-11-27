import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PlusMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 9.5h6M9 17.5h6M12 6.5v6" />
  </svg>
);
const ForwardRef = forwardRef(PlusMinus);
export default ForwardRef;
