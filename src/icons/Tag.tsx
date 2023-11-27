import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Tag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path stroke="currentColor" d="M15.5 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 4.75h7.25V12l-6.696 6.67a2 2 0 0 1-2.87-.047L5.29 13.94a2 2 0 0 1 .072-2.81z"
    />
  </svg>
);
const ForwardRef = forwardRef(Tag);
export default ForwardRef;
