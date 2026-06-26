import type { Transition, Variants } from "motion/react";

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
// Motion presets — shared spring + variant configuration used by every
// animated surface in the app. Keeping them in one file prevents drift
// between interactive feedback and entrance/viewport transitions.
// ---------------------------------------------------------------------------

/** Shared spring for interactive feedback (buttons, links, cards). */
export const springTransition: Transition = {
	type: "spring",
	stiffness: 400,
	damping: 25,
};

/** Gentler spring used for entrance and viewport-triggered reveals. */
export const gentleSpring: Transition = {
	type: "spring",
	stiffness: 200,
	damping: 24,
};

/** Scale-down feedback for tap/press — pair with `whileTap`. */
export const tapScale = { scale: 0.97 };

/** Subtle scale-up on hover — pair with `whileHover`. */
export const hoverScale = { scale: 1.03 };

/** Card-style hover lift with a slight y offset. */
export const hoverLift = { scale: 1.01, y: -2 };

/** Fade + slide-up entrance used by `<MotionSection>`. */
export const fadeSlideUp: Variants = {
	hidden: { opacity: 0, y: 18 },
	visible: {
		opacity: 1,
		y: 0,
		transition: gentleSpring,
	},
};

/** Parent container that staggers its children's animations. */
export const staggerContainer: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.06,
		},
	},
};

/** Individual stagger child — pairs with `staggerContainer`. */
export const staggerItem: Variants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: gentleSpring,
	},
};

/** Dropdown / popover entrance (use with `AnimatePresence`). */
export const dropdownVariants: Variants = {
	hidden: { opacity: 0, y: 6, scale: 0.97 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { ...springTransition, stiffness: 500 },
	},
	exit: {
		opacity: 0,
		y: 4,
		scale: 0.98,
		transition: { duration: 0.15, ease: "easeIn" },
	},
};

/** Modal backdrop fade. */
export const backdropVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.2 } },
	exit: { opacity: 0, transition: { duration: 0.15 } },
};

/** Modal content scale-up entrance. */
export const dialogContentVariants: Variants = {
	hidden: { opacity: 0, scale: 0.92 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: springTransition,
	},
	exit: {
		opacity: 0,
		scale: 0.95,
		transition: { duration: 0.15, ease: "easeIn" },
	},
};