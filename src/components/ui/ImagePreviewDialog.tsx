"use client";

import { AnimatePresence, motion } from "motion/react";
import Image, { type ImageProps } from "next/image";
import {
	type MouseEvent,
	type KeyboardEvent as ReactKeyboardEvent,
	useCallback,
	useEffect,
	useRef,
} from "react";
import { createPortal } from "react-dom";
import Button from "@/components/ui/Button";
import { backdropVariants, dialogContentVariants } from "@/lib/utils";

interface ImagePreviewDialogProps {
	isOpen: boolean;
	onClose: () => void;
	src: ImageProps["src"];
	alt: string;
	dialogLabel?: string;
	width?: number;
	height?: number;
	sizes?: string;
	dialogWidthClassName?: string;
	imageClassName?: string;
}

const ImagePreviewDialog = ({
	isOpen,
	onClose,
	src,
	alt,
	dialogLabel = "Image preview",
	width = 600,
	height = 600,
	sizes = "(max-width: 768px) 90vw, 25vw",
	dialogWidthClassName = "w-[min(90vw,24rem)]",
	imageClassName = "h-full w-full rounded-lg object-contain",
}: ImagePreviewDialogProps) => {
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const placeholder = typeof src === "string" ? "empty" : "blur";
	const closeOnEscape = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		},
		[onClose],
	);
	const closeOnBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	};
	const closeOnDialogKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
		if (event.key === "Escape") {
			onClose();
		}
	};

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		const previousOverflow = document.body.style.overflow;

		document.body.style.overflow = "hidden";
		closeButtonRef.current?.focus();
		window.addEventListener("keydown", closeOnEscape);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", closeOnEscape);
		};
	}, [isOpen, closeOnEscape]);

	const dialog = (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					key="image-preview-backdrop"
					role="dialog"
					aria-modal="true"
					aria-label={dialogLabel}
					tabIndex={-1}
					className="fixed inset-0 z-50 flex items-center justify-center p-4"
					variants={backdropVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
					onClick={closeOnBackdropClick}
					onKeyDown={closeOnDialogKeyDown}
					style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
				>
					<motion.div
						className={`${dialogWidthClassName} relative overflow-hidden rounded-lg`}
						variants={dialogContentVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<Button
							ref={closeButtonRef}
							variant="unstyled"
							aria-label="Close image preview"
							onClick={onClose}
							className="absolute top-3 right-3 z-20 rounded-full bg-black/70 p-2.5 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>
							<svg
								aria-hidden="true"
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</Button>

						<Image
							src={src}
							alt={alt}
							width={width}
							height={height}
							sizes={sizes}
							placeholder={placeholder}
							className={imageClassName}
						/>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);

	return createPortal(dialog, document.body);
};

export default ImagePreviewDialog;
