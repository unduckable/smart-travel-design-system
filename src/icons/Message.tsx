import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Message = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 18.25c3.5 0 7.25-1.75 7.25-6.25S15.5 5.75 12 5.75 4.75 7.5 4.75 12c0 1.03.196 1.916.541 2.67.215.47.336.987.24 1.495l-.262 1.399a1 1 0 0 0 1.168 1.167l3.207-.602a2.24 2.24 0 0 1 .764-.003c.527.084 1.062.124 1.592.124"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M12.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M15.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Message);
export default ForwardRef;
