import { Briefcase, FileText } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";

const emailLink =
	"mailto:harshalsawant.dev@gmail.com?subject=Interested%20in%20Hiring%20You";
const resumeFilePath = "/public/docs/harshal_sawant-resume.pdf";
const hireText =
	"I'm open to software engineering roles and freelance work where I can build reliable backend systems, developer tools, and performance-critical products.";

const Hire = () => {
	return (
		<section className="section-static section-copy flex flex-col gap-2">
			<SectionHeading title="Hire Me" />
			<p>{hireText}</p>
			<div className="flex flex-wrap items-center gap-2.5">
				<ButtonLink href={emailLink}>
					<Briefcase />
					Hire Me
				</ButtonLink>
				<ButtonLink href={resumeFilePath}>
					<FileText />
					Resume
				</ButtonLink>
			</div>
		</section>
	);
};

export default Hire;
