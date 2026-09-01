"use client";

import {
	AnimatePresence,
	type MotionValue,
	motion,
	type SpringOptions,
	useMotionValue,
	useSpring,
	useTransform,
} from "motion/react";
import {
	Children,
	cloneElement,
	createContext,
	isValidElement,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";

function cn(...classes: Array<string | undefined>) {
	return classes.filter(Boolean).join(" ");
}

const DOCK_HEIGHT = 96;
const DEFAULT_MAGNIFICATION = 64;
const DEFAULT_DISTANCE = 140;
const DEFAULT_PANEL_HEIGHT = 56;

type DockContextValue = {
	mouseX: MotionValue<number>;
	spring: SpringOptions;
	magnification: number;
	distance: number;
};

const DockContext = createContext<DockContextValue | null>(null);

function useDock() {
	const context = useContext(DockContext);
	if (!context) throw new Error("Dock items must be used inside Dock.");
	return context;
}

export function Dock({
	children,
	className,
	distance = DEFAULT_DISTANCE,
	magnification = DEFAULT_MAGNIFICATION,
	panelHeight = DEFAULT_PANEL_HEIGHT,
	spring = { mass: 0.1, stiffness: 180, damping: 16 },
}: {
	children: React.ReactNode;
	className?: string;
	distance?: number;
	magnification?: number;
	panelHeight?: number;
	spring?: SpringOptions;
}) {
	const mouseX = useMotionValue(Infinity);
	const isHovered = useMotionValue(0);
	const maxHeight = useMemo(
		() => Math.max(DOCK_HEIGHT, magnification + magnification / 2 + 4),
		[magnification],
	);
	const height = useSpring(
		useTransform(isHovered, [0, 1], [panelHeight, maxHeight]),
		spring,
	);

	return (
		<motion.div
			style={{ height }}
			className="mx-2 flex max-w-full items-end overflow-x-auto [scrollbar-width:none]"
		>
			<motion.nav
				onMouseMove={(event) => {
					isHovered.set(1);
					mouseX.set(event.pageX);
				}}
				onMouseLeave={() => {
					isHovered.set(0);
					mouseX.set(Infinity);
				}}
				className={cn(
					"mx-auto flex w-fit items-end gap-1 rounded-2xl border border-border/70 bg-background/90 px-2 py-1.5 shadow-lg shadow-foreground/10 backdrop-blur-md sm:gap-2 sm:px-3",
					className,
				)}
				style={{ height: panelHeight }}
				aria-label="Site navigation"
				role="toolbar"
			>
				<DockContext.Provider
					value={{ mouseX, spring, distance, magnification }}
				>
					{children}
				</DockContext.Provider>
			</motion.nav>
		</motion.div>
	);
}

export function DockItem({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const { distance, magnification, mouseX, spring } = useDock();
	const isHovered = useMotionValue(0);
	const mouseDistance = useTransform(mouseX, (value) => {
		const rect = ref.current?.getBoundingClientRect();
		return value - (rect?.x ?? 0) - (rect?.width ?? 0) / 2;
	});
	const width = useSpring(
		useTransform(
			mouseDistance,
			[-distance, 0, distance],
			[36, magnification, 36],
		),
		spring,
	);

	return (
		<motion.div
			ref={ref}
			style={{ width }}
			className={cn(
				"relative inline-flex aspect-square items-center justify-center",
				className,
			)}
			onHoverStart={() => isHovered.set(1)}
			onHoverEnd={() => isHovered.set(0)}
			onFocus={() => isHovered.set(1)}
			onBlur={() => isHovered.set(0)}
		>
			{Children.map(children, (child) =>
				isValidElement(child)
					? cloneElement(child, { width, isHovered } as never)
					: child,
			)}
		</motion.div>
	);
}

export function DockIcon({
	children,
	className,
	width,
}: {
	children: React.ReactNode;
	className?: string;
	width?: MotionValue<number>;
}) {
	const fallbackWidth = useMotionValue(36);
	const iconWidth = useTransform(width ?? fallbackWidth, (value) => value / 2);
	return (
		<motion.span
			style={{ width: iconWidth }}
			className={cn("flex items-center justify-center", className)}
		>
			{children}
		</motion.span>
	);
}

export function DockLabel({
	children,
	className,
	isHovered,
}: {
	children: React.ReactNode;
	className?: string;
	isHovered?: MotionValue<number>;
}) {
	const [visible, setVisible] = useState(false);
	useEffect(
		() => isHovered?.on("change", (value) => setVisible(value === 1)),
		[isHovered],
	);
	return (
		<AnimatePresence>
			{visible && (
				<motion.span
					initial={{ opacity: 0, y: 4 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0 }}
					className={cn(
						"pointer-events-none absolute -top-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-sm",
						className,
					)}
					role="tooltip"
				>
					{children}
				</motion.span>
			)}
		</AnimatePresence>
	);
}
