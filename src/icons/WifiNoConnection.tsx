import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WifiNoConnection = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path stroke="currentColor" d="M12.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.5 14.563a4.231 4.231 0 0 1 2.5-.813c.934 0 1.798.302 2.5.813m-7.212-3.335a8.206 8.206 0 0 1 3.058-1.312m3.833.125c.919.25 1.773.656 2.534 1.187M4.75 8.25C6.734 6.866 9 5.75 12 5.75c.688 0 1.336.059 1.952.166m3.383 1.163c.674.349 1.307.747 1.915 1.171m-1-2.5-11.5 11.5"
    />
  </svg>
);
const ForwardRef = forwardRef(WifiNoConnection);
export default ForwardRef;
