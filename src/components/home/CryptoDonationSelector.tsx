"use client";

import Button from "@/components/ui/Button";
import { cryptoDonationOptions } from "@/data/social";
import { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa6";

const feedbackResetDelay = 1800;

export default function CryptoDonationSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Dismiss on scroll to maintain stable viewport interactions
  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Reset copied state securely
  useEffect(() => {
    if (copiedId === null) return;
    const timeout = window.setTimeout(() => setCopiedId(null), feedbackResetDelay);
    return () => window.clearTimeout(timeout);
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
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaWallet className="size-4 shrink-0" />
        Crypto
      </Button>

			<div
			  className={[
			    "absolute bottom-full z-50 pb-2 transition-all duration-200 ease-out right-0 sm:right-auto sm:left-0",
			    "w-max min-w-48",
			    isOpen
			      ? "translate-y-0 opacity-100 pointer-events-auto visible"
			      : "translate-y-1 opacity-0 pointer-events-none invisible",
			  ].join(" ")}
			>

        <div className="flex w-full flex-col gap-2 rounded-lg border border-(--gb-border) bg-(--gb-surface) p-2 shadow-xl ring-1 ring-black/5">
          {cryptoDonationOptions.map((option) => {
            const Icon = option.icon;
            const isCopied = copiedId === option.id;

            return (
              <Button
                key={option.id}
                className={[
                  "btn w-full justify-between gap-3 text-left transition-colors hover:bg-black/5 dark:hover:bg-white/10",
                  isCopied ? "border-(--gb-yellow)" : "",
                ].filter(Boolean).join(" ")}
                onClick={() => handleCopy(option.id, option.address)}
              >
                <span className="flex items-center gap-2">
                  <Icon className="size-5 shrink-0 text-(--gb-fg1)" />
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-sm font-medium text-(--gb-fg1)">{option.name}</span>
                    {option.shortName && (
                      <span className="text-xs text-(--gb-fg2)">{option.shortName}</span>
                    )}
                  </span>
                </span>
                <span className={`text-xs font-medium ${isCopied ? "text-green-500 dark:text-green-400" : "text-(--gb-fg2)"}`}>
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
