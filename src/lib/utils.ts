import type { Variants } from "motion/react";

// ---------------------------------------------------------------------------
// Date formatting
// ---------------------------------------------------------------------------

const shortDateFormatter = new Intl.DateTimeFormat("en-US", {
	year: "numeric",
	month: "short",
	day: "numeric",
	timeZone: "UTC",
});

const longDateFormatter = new Intl.DateTimeFormat("en-US", {
	year: "numeric",
	month: "long",
	day: "numeric",
	timeZone: "UTC",
});

export const formatShortDate = (date: string) =>
	shortDateFormatter.format(new Date(date));

export const formatLongDate = (date: string) =>
	longDateFormatter.format(new Date(date));

// ---------------------------------------------------------------------------
// Motion presets — kept exclusively for explicit, user-triggered feedback
// (hover, tap, dropdown/modal open-close). All passive scroll-reveal and
// mount-time entrance variants have been removed; sections paint instantly.
// Every animated property here is GPU-friendly (transform / opacity).
// ---------------------------------------------------------------------------

/** Dropdown / popover entrance (use with `AnimatePresence`).
 *  GPU-only: opacity + translateY + scale. */
export const dropdownVariants: Variants = {
	hidden: { opacity: 0, y: 6, scale: 0.97 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { type: "spring", stiffness: 500, damping: 30, mass: 0.6 },
	},
	exit: {
		opacity: 0,
		y: 4,
		scale: 0.98,
		transition: { duration: 0.12, ease: "easeIn" },
	},
};

