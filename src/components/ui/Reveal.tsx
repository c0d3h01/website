import type { ReactNode } from "react";

interface RevealProps {
	children: ReactNode;
	delay?: number;
}

const Reveal = ({ children }: RevealProps) => <div>{children}</div>;

export default Reveal;
