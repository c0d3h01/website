import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import AppShell from "@/layout/AppShell";

export const metadata: Metadata = {
	alternates: {
		canonical: "/",
	},
};
export const dynamic = "force-static";

const HomePageRoute = () => {
	return (
		<AppShell>
			<HomePage />
		</AppShell>
	);
};

export default HomePageRoute;
