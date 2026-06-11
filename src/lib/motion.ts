import type { Transition, Variants } from "motion/react";

/**
 * Shared spring config used across all interactive Motion animations.
 * Tuned for snappy but natural-feeling feedback.
 */
export const springTransition: Transition = {
	type: "spring",
	stiffness: 400,
	damping: 25,
};

/** Gentle spring for entrance/viewport animations. */
export const gentleSpring: Transition = {
	type: "spring",
	stiffness: 200,
	damping: 24,
};

// ---------------------------------------------------------------------------
// Interactive feedback presets (buttons, links, cards)
// ---------------------------------------------------------------------------

/** Scale-down on tap/press — use with `whileTap`. */
export const tapScale = { scale: 0.97 };

/** Subtle lift on hover — use with `whileHover`. */
export const hoverScale = { scale: 1.03 };

/** Card-specific hover lift with slight y offset. */
export const hoverLift = { scale: 1.01, y: -2 };

// ---------------------------------------------------------------------------
// Scroll-reveal variants (viewport-triggered)
// ---------------------------------------------------------------------------

/** Fade + slide-up used by `<MotionSection>`. */
export const fadeSlideUp: Variants = {
	hidden: { opacity: 0, y: 18 },
	visible: {
		opacity: 1,
		y: 0,
		transition: gentleSpring,
	},
};

// ---------------------------------------------------------------------------
// Stagger variants (lists of items)
// ---------------------------------------------------------------------------

/** Parent container that staggers its children. */
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

// ---------------------------------------------------------------------------
// Dropdown / overlay entrance
// ---------------------------------------------------------------------------

/** Dropdown panel entrance (used with AnimatePresence). */
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

/** Dialog backdrop fade. */
export const backdropVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.2 } },
	exit: { opacity: 0, transition: { duration: 0.15 } },
};

/** Dialog content scale-up entrance. */
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
