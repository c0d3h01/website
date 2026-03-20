import type { ReactNode } from "react";

interface IconProps {
	className?: string;
	title?: string;
}

interface IconBaseProps extends IconProps {
	children: ReactNode;
	fill?: "none" | "currentColor";
	stroke?: "none" | "currentColor";
}

const IconBase = ({
	className,
	title,
	children,
	fill = "none",
	stroke = "currentColor",
}: IconBaseProps) => (
	<svg
		aria-hidden="true"
		className={className}
		viewBox="0 0 24 24"
		fill={fill}
		stroke={stroke}
	>
		<title>{title}</title>
		{children}
	</svg>
);

export const ArrowLeftIcon = ({
	className = "h-5 w-5",
	title = "Go back",
}: IconProps) => (
	<IconBase className={className} title={title}>
		<path
			d="M19 12H5m0 0 6 6m-6-6 6-6"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.9"
		/>
	</IconBase>
);

export const EyeIcon = ({ className, title = "Show preview" }: IconProps) => (
	<IconBase className={className} title={title}>
		<path
			d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.8"
		/>
		<circle cx="12" cy="12" r="3" strokeWidth="1.8" />
	</IconBase>
);

export const EyeOffIcon = ({
	className,
	title = "Hide preview",
}: IconProps) => (
	<IconBase className={className} title={title}>
		<path
			d="M17.94 17.94C16.13 19.24 14.12 20 12 20 5 20 1 12 1 12a21.8 21.8 0 0 1 5.06-5.94"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.8"
		/>
		<path
			d="M9.9 4.24A10.72 10.72 0 0 1 12 4c7 0 11 8 11 8a22.1 22.1 0 0 1-3.17 4.31"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.8"
		/>
		<path d="M1 1l22 22" strokeLinecap="round" strokeWidth="1.8" />
	</IconBase>
);

export const ExternalLinkIcon = ({
	className,
	title = "Open link",
}: IconProps) => (
	<IconBase className={className} title={title}>
		<path
			d="M10 14a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 0 0-7.07-7.07L11 5"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.8"
		/>
		<path
			d="M14 10a5 5 0 0 0-7.07 0L3.39 13.54a5 5 0 1 0 7.07 7.07L13 18.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.8"
		/>
	</IconBase>
);

export const GitHubIcon = ({
	className,
	title = "Open repository",
}: IconProps) => (
	<IconBase
		className={className}
		title={title}
		fill="currentColor"
		stroke="none"
	>
		<path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2a11.4 11.4 0 0 1 6.1 0c2.3-1.5 3.4-1.2 3.4-1.2.7 1.6.3 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.8 5.6-5.4 5.9.4.3.8 1 .8 2.1v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
	</IconBase>
);
