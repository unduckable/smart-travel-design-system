import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.0625 5.4375L5.4375 8.0625L8.0625 10.6875"
      stroke="#8A8AA3"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.9375 8.0625H5.4375"
      stroke="#8A8AA3"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.9375 13.3125L18.5625 15.9375L15.9375 18.5625"
      stroke="#8A8AA3"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.0625 15.9375H18.5625"
      stroke="#8A8AA3"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const TwoWayArrow = forwardRef(Icon);
export default TwoWayArrow;
