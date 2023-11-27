import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PhoneCallIncoming = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.25 4.75-4.5 4.5m0 0v-3.5m0 3.5h3.5M6.068 4.75h2.825l2.071 3.107-1.637 1.638c-.266.266-.36.659-.199.999.287.607.86 1.61 1.836 2.542.954.91 1.922 1.488 2.518 1.796.352.182.77.095 1.05-.185l1.61-1.611 3.108 2.071v2.825c0 .728-.59 1.318-1.318 1.318-7.28 0-13.182-5.902-13.182-13.182 0-.728.59-1.318 1.318-1.318"
    />
  </svg>
);
const ForwardRef = forwardRef(PhoneCallIncoming);
export default ForwardRef;
