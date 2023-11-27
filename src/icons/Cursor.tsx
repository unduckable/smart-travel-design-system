import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Cursor = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13 13-2 5.25-5.25-12.5L18.25 11zm0 0 5.25 5.25"
    />
  </svg>
);
const ForwardRef = forwardRef(Cursor);
export default ForwardRef;
