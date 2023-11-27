import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WarningTriangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.952 16.354 5.263-10.497c.738-1.472 2.839-1.472 3.576 0l5.258 10.497a2 2 0 0 1-1.788 2.896H6.741a2 2 0 0 1-1.789-2.896"
    />
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v2" />
    <path stroke="currentColor" d="M12.5 16a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
  </svg>
);
const ForwardRef = forwardRef(WarningTriangle);
export default ForwardRef;
