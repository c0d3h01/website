import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function CustomATag({ href, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-orange-100 border-b border-orange-100/30 border-dashed leading-none hover:border-orange-400 hover:text-orange-400 transition-colors"
    >
      {children}
    </a>
  );
}
