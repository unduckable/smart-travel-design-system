import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Layers = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.25 12-4.5 3L12 19.25 19.25 15l-4.578-3M12 4.75 19.25 9 12 13.25 4.75 9z"
    />
  </svg>
);
const ForwardRef = forwardRef(Layers);
export default ForwardRef;
