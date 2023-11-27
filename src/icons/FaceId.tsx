import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FaceId = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.25 4.75h-.5a4 4 0 0 0-4 4v.5M9.25 19.25h-.5a4 4 0 0 1-4-4v-.5M14.75 4.75h.5a4 4 0 0 1 4 4v.5M14.75 19.25h.5a4 4 0 0 0 4-4v-.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 10a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M14.5 10a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.75 12.75s.25 2.5 3.25 2.5 3.25-2.5 3.25-2.5"
    />
  </svg>
);
const ForwardRef = forwardRef(FaceId);
export default ForwardRef;
