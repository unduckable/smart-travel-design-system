import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Bookmark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.75 6.75a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2v12.5L12 14.75l-5.25 4.5z"
    />
  </svg>
);
const ForwardRef = forwardRef(Bookmark);
export default ForwardRef;
