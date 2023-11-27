import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Union = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 4.75h-5.5a2 2 0 0 0-2 2v5.5a2 2 0 0 0 2 2h3v3a2 2 0 0 0 2 2h5.5a2 2 0 0 0 2-2v-5.5a2 2 0 0 0-2-2h-3v-3a2 2 0 0 0-2-2"
    />
  </svg>
);
const ForwardRef = forwardRef(Union);
export default ForwardRef;
