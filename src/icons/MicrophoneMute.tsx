import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MicrophoneMute = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.25 8.5V8a3.25 3.25 0 0 0-6.5 0v3.18c0 .047 0 .092.004.139.024.378.2 2.212 1.277 2.478m8.219-1.047s-.25 4.5-6.25 4.5c-.342 0-.666-.015-.972-.042M5.75 12.75s.105 1.891 1.814 3.222M12 17.75v1.5m6.25-13.5-12.5 12.5"
    />
  </svg>
);
const ForwardRef = forwardRef(MicrophoneMute);
export default ForwardRef;
