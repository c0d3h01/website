import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import AppShell from "@/layout/AppShell";

export const metadata: Metadata = {
	alternates: {
		canonical: "/",
	},
};
export const revalidate = 300;

const HomePageRoute = () => {
	return (
		<AppShell>
			<HomePage />
		</AppShell>
	);
};

export default HomePageRoute;
