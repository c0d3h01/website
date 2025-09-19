"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { funky } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IconCheck, IconCopy } from "@tabler/icons-react";

type CodeBlockProps = {
  language: string;
  code: string;
};

export const CodeBlock = ({ code, language = "tsx" }: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    if (code) {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative w-full rounded-lg bg-stone-900 p-4 font-mono text-sm">
      <div className="flex justify-end gap-2">
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-xs text-stone-400 hover:text-stone-200 transition-colors font-sans"
        >
          {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={funky}
        customStyle={{
          margin: 0,
          padding: 0,
          background: "transparent",
          fontSize: "0.75rem",
        }}
        lineProps={() => ({
          style: {
            backgroundColor: "transparent",
            display: "block",
            width: "100%",
          },
        })}
        wrapLines={true}
        // showLineNumbers={true}
        PreTag="div"
      >
        {String(code)}
      </SyntaxHighlighter>
    </div>
  );
};
