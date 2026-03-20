import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { resumeFilePath } from "@/data";

export const metadata: Metadata = {
	title: "Resume",
	description: "Redirects to the latest resume PDF",
	alternates: {
		canonical: resumeFilePath,
	},
	robots: {
		index: false,
		follow: false,
	},
};
export const dynamic = "force-static";

const ResumePage = () => {
	redirect(resumeFilePath);
};

export default ResumePage;
