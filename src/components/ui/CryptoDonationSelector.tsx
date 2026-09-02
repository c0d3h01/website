"use client";

import { Bitcoin, Wallet } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { SiEthereum, SiSolana } from "react-icons/si";
import Button from "@/components/ui/Button";
import { dropdownVariants } from "@/lib/utils";

const cryptoDonationOptions = [
	{
		name: "Bitcoin",
		shortName: "BTC",
		address: "bc1qdy2acxf0jk4j94stnmccnkyk5avfhqqc09xjvl",
		icon: Bitcoin,
	},
	{
		name: "Ethereum",
		shortName: "ETH",
		address: "0x87EdD72c510ecc537B167FF21ef726B62f7f600B",
		icon: SiEthereum,
	},
	{
		name: "Solana",
		shortName: "SOL",
		address: "4RdWWahnTrrtFfFCWy2wgznYGcJseCotphaPbcpSnR8H",
		icon: SiSolana,
	},
];

const COPY_RESET_MS = 1800;

const CryptoDonationSelector = memo(function CryptoDonationSelector() {
	const [isOpen, setIsOpen] = useState(false);
	const [copiedKey, setCopiedKey] = useState<string | null>(null);
	const containerRef = useRef<HTMLFieldSetElement>(null);
	const scrollListenerRef = useRef(false);

	useEffect(() => {
		if (!isOpen) return;
		const onScroll = () => setIsOpen(false);
		if (!scrollListenerRef.current) {
			window.addEventListener("scroll", onScroll, { passive: true });
			scrollListenerRef.current = true;
		}
		return () => {
			window.removeEventListener("scroll", onScroll);
			scrollListenerRef.current = false;
		};
	}, [isOpen]);

	useEffect(() => {
		if (!isOpen) return;
		const onClickOutside = (e: MouseEvent | TouchEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", onClickOutside, { passive: true });
		document.addEventListener("touchstart", onClickOutside, { passive: true });
		return () => {
			document.removeEventListener("mousedown", onClickOutside);
			document.removeEventListener("touchstart", onClickOutside);
		};
	}, [isOpen]);

	useEffect(() => {
		if (copiedKey === null) return;
		const t = setTimeout(() => setCopiedKey(null), COPY_RESET_MS);
		return () => clearTimeout(t);
	}, [copiedKey]);

	const handleCopy = async (shortName: string, address: string) => {
		try {
			// Try modern clipboard API first
			if (navigator.clipboard?.writeText) {
				await navigator.clipboard.writeText(address);
				setCopiedKey(shortName);
			} else {
				// Fallback for older browsers or contexts where clipboard isn't available
				const textarea = document.createElement("textarea");
				textarea.value = address;
				textarea.style.position = "fixed";
				textarea.style.opacity = "0";
				document.body.appendChild(textarea);
				textarea.select();
				try {
					document.execCommand("copy");
					setCopiedKey(shortName);
				} finally {
					document.body.removeChild(textarea);
				}
			}
		} catch {
			setCopiedKey(null);
		}
	};

	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (e.key === "Escape" && isOpen) {
				setIsOpen(false);
			}
		},
		[isOpen],
	);

	return (
		<fieldset
			ref={containerRef}
			aria-label="Crypto donation selector"
			className="relative inline-flex shrink-0 flex-col items-start border-none p-0"
			onPointerEnter={(e) => {
				if (e.pointerType === "mouse") setIsOpen(true);
			}}
			onPointerLeave={(e) => {
				if (e.pointerType === "mouse") setIsOpen(false);
			}}
			onKeyDown={handleKeyDown}
		>
			<Button
				className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap"
				aria-label="Open crypto donation options"
				aria-expanded={isOpen}
				aria-haspopup="listbox"
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<Wallet className="size-4 shrink-0" />
				Crypto
			</Button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						role="listbox"
						aria-label="Crypto donation options"
						className="absolute bottom-full left-0 z-50 w-max min-w-48 pb-2"
						variants={dropdownVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<div className="flex w-full flex-col gap-2 rounded-lg border border-(--gb-border) bg-(--gb-surface) p-2 shadow-xl ring-1 ring-black/5">
							{cryptoDonationOptions.map((option) => {
								const isCopied = copiedKey === option.shortName;
								return (
									<button
										key={option.shortName}
										type="button"
										role="option"
										aria-selected={isCopied}
										className={`w-full flex items-center justify-between gap-3 px-2 py-1 rounded-md text-left transition-colors cursor-pointer border-none bg-transparent hover:bg-black/5 dark:hover:bg-white/10 ${
											isCopied ? "border-(--gb-yellow)" : ""
										}`}
										onClick={() => handleCopy(option.shortName, option.address)}
									>
										<span className="flex items-center gap-2">
											<option.icon className="size-5 shrink-0 text-(--gb-fg1)" />
											<span className="flex flex-col items-start leading-tight">
												<span className="text-sm font-medium text-(--gb-fg1)">
													{option.name}
												</span>
												{option.shortName && (
													<span className="text-xs text-(--gb-fg2)">
														{option.shortName}
													</span>
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
									</button>
								);
							})}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</fieldset>
	);
});

export default CryptoDonationSelector;
