import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.98438 9.98438H14.5156"
      stroke="#8A8AA3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.98438 14.5156H14.5156"
      stroke="#8A8AA3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.2344 12.7031C17.2344 11.7017 18.0455 10.8906 19.0469 10.8906V7.26562C19.0469 6.76538 18.6409 6.35938 18.1406 6.35938H6.35938C5.85913 6.35938 5.45312 6.76538 5.45312 7.26562V10.4375C6.45453 10.4375 7.26562 11.2486 7.26562 12.25C7.26562 13.2514 6.45453 14.0625 5.45312 14.0625V17.2344C5.45312 17.7346 5.85913 18.1406 6.35938 18.1406H18.1406C18.6409 18.1406 19.0469 17.7346 19.0469 17.2344V14.5156C18.0455 14.5156 17.2344 13.7045 17.2344 12.7031Z"
      stroke="#8A8AA3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Discounts = forwardRef(Icon);
export default Discounts;
