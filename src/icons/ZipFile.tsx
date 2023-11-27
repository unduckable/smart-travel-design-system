import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ZipFile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 15.25v-1.5m0-2.5v-.5m0-2.5v-.5m0-2.5v-.5m-5.25 0h10.5a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2H6.75a2 2 0 0 1-2-2V6.75a2 2 0 0 1 2-2"
    />
  </svg>
);
const ForwardRef = forwardRef(ZipFile);
export default ForwardRef;
