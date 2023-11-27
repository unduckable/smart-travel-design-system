import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AnnotationDots = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 6.75a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-2.625l-2.625 2-2.625-2H6.75a2 2 0 0 1-2-2z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.5 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M12.5 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M15.5 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
);
const ForwardRef = forwardRef(AnnotationDots);
export default ForwardRef;
