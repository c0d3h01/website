import React from "react";

export function H3Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`md:text-[16px] text-base text-blue-50 font-semibold group-hover:text-blue-500 transition-colors duration-300 ${className}`}
    >
      {children}
    </h3>
  );
}
