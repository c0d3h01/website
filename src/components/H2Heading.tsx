import React from "react";
import { Star } from "./Star";

export function H2Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold text-stone-50/70"><Star/> {children}</h2>;
}
