import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Projector = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 7.75h12.5m-12.5 0v7.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-7.5m-12.5 0a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1M12 17.5v1.75"
    />
  </svg>
);
const ForwardRef = forwardRef(Projector);
export default ForwardRef;
