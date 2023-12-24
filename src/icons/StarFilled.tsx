import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const component = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path
      d="M5 0L6.2069 3.7931H10L6.89655 6.2069L7.93103 10L5 7.58621L2.06897 10L3.10345 6.2069L0 3.7931H3.7931L5 0Z"
      fill="#FFC233"
    />
  </svg>
);
const StarFilled = forwardRef(component);
export default StarFilled;
