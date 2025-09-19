import React from "react";
import { Button } from "@/components/ui/Button";
import { NextImage } from "@/components/ui/NextImage";
import type { ImageProps } from "next/image";
import { CodeBlock } from "./ui/CodeBlock";
import { ExternalLink, Quote, AlertCircle, Info, CheckCircle } from "lucide-react";

export const components = {
  Button,
  
  h1: (props: React.ComponentProps<"h1">) => (
    <h1 className="text-3xl md:text-4xl font-semibold text-blue-500 py-4 border-b border-stone-700 mb-6" {...props} />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="text-lg md:text-xl font-semibold text-stone-50 mt-8 mb-4" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="text-lg md:text-xl font-semibold text-stone-100 mt-6 mb-3" {...props} />
  ),
  h4: (props: React.ComponentProps<"h4">) => (
    <h4 className="text-lg md:text-xl font-semibold text-stone-200 mt-4 mb-2" {...props} />
  ),
  h5: (props: React.ComponentProps<"h5">) => (
    <h5 className="text-base md:text-lg font-medium text-stone-300 mt-3 mb-2" {...props} />
  ),
  h6: (props: React.ComponentProps<"h6">) => (
    <h6 className="text-sm md:text-base font-medium text-stone-400 mt-2 mb-1" {...props} />
  ),

  // Paragraphs with proper spacing
  p: (props: React.ComponentProps<"p">) => (
    <p className="text-stone-400 leading-relaxed mb-4 text-sm md:text-base" {...props} />
  ),

  // Enhanced lists with better styling
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-stone-400 pl-4" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-stone-400 pl-4" {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li className="text-stone-400 leading-relaxed" {...props} />
  ),

  a: ({ href = "", ...props }: React.ComponentProps<"a">) => {
    const isExternal = href.startsWith("http") || href.startsWith("https");
    return (
      <a
        className="text-blue-400 hover:text-blue-300 hover:underline transition-colors inline-flex items-center gap-1"
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {props.children}
        {isExternal && <ExternalLink size={12} />}
      </a>
    );
  },

  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-stone-900/50 rounded-r  -lg" {...props}>
      <div className="flex items-start gap-2">
        <Quote size={16} className="text-blue-500 mt-1 flex-shrink-0" />
        <div className="text-stone-300 italic">
          {props.children}
        </div>
      </div>
    </blockquote>
  ),

  table: (props: React.ComponentProps<"table">) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-stone-700 rounded-lg overflow-hidden" {...props} />
    </div>
  ),
  thead: (props: React.ComponentProps<"thead">) => (
    <thead className="bg-stone-800" {...props} />
  ),
  tbody: (props: React.ComponentProps<"tbody">) => (
    <tbody className="divide-y divide-stone-700" {...props} />
  ),
  th: (props: React.ComponentProps<"th">) => (
    <th className="px-4 py-2 text-left text-stone-200 font-semibold border-r border-stone-700 last:border-r-0" {...props} />
  ),
  td: (props: React.ComponentProps<"td">) => (
    <td className="px-4 py-2 text-stone-400 border-r border-stone-700 last:border-r-0" {...props} />
  ),

  hr: (props: React.ComponentProps<"hr">) => (
    <hr className="border-stone-700 my-8" {...props} />
  ),

  Img: ({ ...props }: {} & ImageProps) => (
    <div className="my-8">
      <div className="rounded-lg overflow-hidden border border-stone-700">
        <NextImage {...props} />
      </div>
    </div>
  ),
  
  pre: (props: React.ComponentProps<"pre">) => {
    const childrenArray = React.Children.toArray(props.children);
    const codeElement = childrenArray.find(
      (child) => React.isValidElement(child) && child.type === "code"
    ) as React.ReactElement<any>;

    if (codeElement) {
      const code = codeElement.props.children;

      return (
        <div className="my-6">
          <CodeBlock
            code={typeof code === "string" ? code : String(code)}
            language={"tsx"}
          />
        </div>
      );
    }

    return <pre {...props} />;
  },

  // Enhanced strong and em
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="text-stone-200 font-semibold" {...props} />
  ),
  em: (props: React.ComponentProps<"em">) => (
    <em className="text-stone-300 italic" {...props} />
  ),

  // Custom components for callouts/alerts
  Alert: ({ type = "info", children, ...props }: { type?: "info" | "warning" | "error" | "success"; children: React.ReactNode }) => {
    const icons = {
      info: <Info size={16} />,
      warning: <AlertCircle size={16} />,
      error: <AlertCircle size={16} />,
      success: <CheckCircle size={16} />
    };

    const colors = {
      info: "border-blue-500 bg-blue-500/10 text-blue-400",
      warning: "border-yellow-500 bg-yellow-500/10 text-yellow-400",
      error: "border-red-500 bg-red-500/10 text-red-400",
      success: "border-green-500 bg-green-500/10 text-green-400"
    };

    return (
      <div className={`border-l-4 pl-4 py-3 my-4 rounded-r-lg ${colors[type]}`} {...props}>
        <div className="flex items-start gap-2">
          {icons[type]}
          <div>{children}</div>
        </div>
      </div>
    );
  },
};
