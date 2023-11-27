import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HelpCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 5.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0m6.495-1.913.001-.008a2.482 2.482 0 0 1 .05-.243 2.59 2.59 0 0 1 .235-.597c.224-.404.571-.739 1.219-.739.835 0 1.132.25 1.265.436.17.238.235.598.235 1.064 0 .466-.255.924-.79 1.13-.635.245-1.46.859-1.46 1.87v.25a.75.75 0 0 0 1.5 0V13c0-.052.018-.122.102-.213.088-.097.228-.192.398-.258A2.687 2.687 0 0 0 15 10c0-.534-.06-1.299-.515-1.936C13.993 7.374 13.165 7 12 7c-1.352 0-2.13.79-2.53 1.51a4.086 4.086 0 0 0-.46 1.36l-.003.03-.002.01v.006L9.75 10l-.745-.083a.75.75 0 0 0 1.49.17M12 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(HelpCircle);
export default ForwardRef;
