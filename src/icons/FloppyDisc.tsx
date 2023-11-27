import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FloppyDisc = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.75 19v-3.25a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1V19M8.75 5v3.25m8.5 11H6.75a2 2 0 0 1-2-2V6.75a2 2 0 0 1 2-2h7.422a2 2 0 0 1 1.414.586l3.078 3.078a2 2 0 0 1 .586 1.414v7.422a2 2 0 0 1-2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(FloppyDisc);
export default ForwardRef;
