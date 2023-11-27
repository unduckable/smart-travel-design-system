import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Spinner = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 4.75v1.5m5.127.623-1.061 1.061M19.25 12h-1.5m-.623 5.127-1.061-1.061M12 17.75v1.5m-4.066-3.184-1.06 1.06M6.25 12h-1.5m3.184-4.066-1.06-1.06"
    />
  </svg>
);
const ForwardRef = forwardRef(Spinner);
export default ForwardRef;
