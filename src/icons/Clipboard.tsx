import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Clipboard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 6.75H7.75a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H15m-5.25 5.5h4.5m-4.5 3h4.5m-4.25-7h4a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1"
    />
  </svg>
);
const ForwardRef = forwardRef(Clipboard);
export default ForwardRef;
