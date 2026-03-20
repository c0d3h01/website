import type { ReactNode } from "react";

interface TooltipProps {
	children: ReactNode;
}

const Tooltip = ({ children }: TooltipProps) => <>{children}</>;

export default Tooltip;
