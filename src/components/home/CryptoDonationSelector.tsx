"use client";

import Button from "@/components/ui/Button";
import { cryptoDonationOptions } from "@/data/social";
import { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa6";

const COPY_RESET_MS = 1800;

export default function CryptoDonationSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onScroll = () => setIsOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  useEffect(() => {
    if (copiedId === null) return;
    const t = setTimeout(() => setCopiedId(null), COPY_RESET_MS);
    return () => clearTimeout(t);
  }, [copiedId]);

  const handleCopy = async (id: number, address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedId(id);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <div
      className="relative inline-flex shrink-0 flex-col items-start"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Button
        className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
        aria-label="Open crypto donation options"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <FaWallet className="size-4 shrink-0" />
        Crypto
      </Button>

      <div
        role="listbox"
        aria-label="Crypto donation options"
        className={`absolute bottom-full right-0 z-50 w-max min-w-48 pb-2 transition-all duration-200 ease-out sm:left-0 sm:right-auto ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-1 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex w-full flex-col gap-2 rounded-lg border border-(--gb-border) bg-(--gb-surface) p-2 shadow-xl ring-1 ring-black/5">
          {cryptoDonationOptions.map((option) => {
            const isCopied = copiedId === option.id;
            return (
              <Button
                key={option.id}
                role="option"
                aria-selected={isCopied}
                className={`w-full justify-between gap-3 text-left transition-colors hover:bg-black/5 dark:hover:bg-white/10 ${
                  isCopied ? "border-(--gb-yellow)" : ""
                }`}
                onClick={() => handleCopy(option.id, option.address)}
              >
                <span className="flex items-center gap-2">
                  <option.icon className="size-5 shrink-0 text-(--gb-fg1)" />
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-sm font-medium text-(--gb-fg1)">{option.name}</span>
                    {option.shortName && (
                      <span className="text-xs text-(--gb-fg2)">{option.shortName}</span>
                    )}
                  </span>
                </span>
                <span
                  className={`text-xs font-medium ${
                    isCopied
                      ? "text-green-500 dark:text-green-400"
                      : "text-(--gb-fg2)"
                  }`}
                >
                  {isCopied ? "Copied!" : "Copy"}
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
