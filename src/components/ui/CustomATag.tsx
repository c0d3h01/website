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
      className="text-blue-100 border-b border-blue-100/30 border-dashed leading-none hover:border-blue-400 hover:text-blue-400 transition-colors"
    >
      {children}
    </a>
  );
}
