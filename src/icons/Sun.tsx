import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Sun = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 2.75v1.5m5.25 2.5-1.184 1.184M21.25 12h-1.5m-2.5 5.25-1.184-1.184M12 19.75v1.5m-4.066-5.184L6.75 17.25M4.25 12h-1.5m5.184-4.066L6.75 6.75m8.5 5.25a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Sun);
export default ForwardRef;
