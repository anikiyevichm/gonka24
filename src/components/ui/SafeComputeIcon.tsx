import React from "react";
import { cn } from "../../lib/utils";

export const SafeComputeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 73 80"
      fill="none"
      className={cn("h-auto w-auto", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M1.47009 11.4213L36.6098 0V79.0661C11.5096 68.523 1.47009 48.3173 1.47009 36.8985V11.4213Z"
          fill="currentColor"
          className="text-primary transition-colors duration-300"
        ></path>
        
        <path
          d="M71.7523 11.4213L36.6127 0V79.0661C61.7128 68.523 71.7523 48.3173 71.7523 36.8985V11.4213Z"
          fill="url(#green_gradient_light)"
          className="transition-opacity duration-300"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="green_gradient_light"
          x1="35.1288"
          y1="89.0035"
          x2="63.8924"
          y2="-15.0289"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.26" stopColor="#4ade80" />
          <stop offset="0.66" stopColor="#22c55e" />
          <stop offset="0.8" stopColor="#16a34a" />
          <stop offset="0.89" stopColor="#15803d" />
        </linearGradient>
      </defs>
    </svg>
  );
};
