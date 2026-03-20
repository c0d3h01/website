import type { ReactNode } from "react";

interface ScreenProps {
	children: ReactNode;
}

const Screen = ({ children }: ScreenProps) => (
	<div className="screen">{children}</div>
);

export default Screen;
