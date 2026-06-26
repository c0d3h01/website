"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaWallet } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import { cryptoDonationOptions } from "@/content";
import { dropdownVariants } from "@/lib/utils";

const COPY_RESET_MS = 1800;

export default function CryptoDonationSelector() {
	const [isOpen, setIsOpen] = useState(false);
	const [copiedId, setCopiedId] = useState<number | null>(null);
	const containerRef = useRef<HTMLFieldSetElement>(null);

	useEffect(() => {
		if (!isOpen) return;
		const onScroll = () => setIsOpen(false);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
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
		document.addEventListener("mousedown", onClickOutside);
		document.addEventListener("touchstart", onClickOutside);
		return () => {
			document.removeEventListener("mousedown", onClickOutside);
			document.removeEventListener("touchstart", onClickOutside);
		};
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
			className="relative inline-flex shrink-0 flex-col items-start border-none p-0 m-0"
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
				<FaWallet className="size-4 shrink-0" />
				Crypto
			</Button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						role="listbox"
						aria-label="Crypto donation options"
						className="absolute bottom-full right-0 z-50 w-max min-w-48 pb-2 sm:left-0 sm:right-auto"
						variants={dropdownVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
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
									</Button>
								);
							})}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</fieldset>
	);
}