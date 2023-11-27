import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Book = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 19.25V6.75m0 12.5.828-.828a4 4 0 0 1 2.829-1.172h2.593a1 1 0 0 0 1-1V5.75a1 1 0 0 0-1-1H14a2 2 0 0 0-2 2m0 12.5-.828-.828a4 4 0 0 0-2.829-1.172H5.75a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1H10a2 2 0 0 1 2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(Book);
export default ForwardRef;
