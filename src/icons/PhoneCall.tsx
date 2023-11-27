import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PhoneCall = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 5.03a7.264 7.264 0 0 1 5 5.076M6.068 4.75h2.825l2.071 3.107-1.637 1.638c-.266.266-.36.659-.199.999.287.607.86 1.61 1.836 2.542.954.91 1.922 1.488 2.518 1.796.352.182.77.095 1.05-.185l1.61-1.611 3.108 2.071v2.825c0 .728-.59 1.318-1.318 1.318-7.28 0-13.182-5.902-13.182-13.182 0-.728.59-1.318 1.318-1.318"
    />
  </svg>
);
const ForwardRef = forwardRef(PhoneCall);
export default ForwardRef;
