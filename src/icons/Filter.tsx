import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Filter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 4.75H4.75l4.562 5.702a2 2 0 0 1 .438 1.25v6.548a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-6.548a2 2 0 0 1 .438-1.25z"
    />
  </svg>
);
const ForwardRef = forwardRef(Filter);
export default ForwardRef;
