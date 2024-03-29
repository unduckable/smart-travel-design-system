import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PhoneCallHangUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.964 13.036a8.726 8.726 0 0 1-1.836-2.542c-.16-.34-.068-.733.199-1l1.637-1.637L8.893 4.75H6.095c-.765 0-1.399.578-1.378 1.343.056 2.096.607 6.232 3.783 9.407m4.797-.672c.114.062.22.11.315.148.281.112.584.006.798-.208l1.733-1.732 3.107 2.071v2.797c0 .766-.579 1.4-1.344 1.38-1.582-.044-4.326-.368-6.942-1.89M18.25 5.75l-12.5 12.5"
    />
  </svg>
);
const ForwardRef = forwardRef(PhoneCallHangUp);
export default ForwardRef;
