import { Briefcase, FileText } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { emailLink, hireText, resumeFilePath } from "@/content";

const Hire = () => {
	return (
		<section className="section-copy flex flex-col gap-3">
			<SectionHeading title="Hire Me" />
			<p className="text-(--fg-secondary)">{hireText}</p>
			<div className="flex flex-wrap items-center gap-2.5 mt-1">
				<ButtonLink href={emailLink}>
					<Briefcase className="size-4" />
					Hire Me
				</ButtonLink>
				<ButtonLink href={resumeFilePath}>
					<FileText className="size-4" />
					Resume
				</ButtonLink>
			</div>
		</section>
	);
};

export default Hire;
