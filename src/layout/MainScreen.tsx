import type { ReactNode } from "react";

interface MainScreenProps {
	children: ReactNode;
}

const MainScreen = ({ children }: MainScreenProps) => (
	<main className="main-screen">{children}</main>
);

export default MainScreen;
