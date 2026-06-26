import { PiFilePdfBold, PiSuitcaseSimpleBold } from "react-icons/pi";
import ButtonLink from "@/components/ui/ButtonLink";
import MotionSection from "@/components/ui/MotionSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { emailLink, hireText, resumeFilePath } from "@/content";

const Hire = () => {
	return (
		<MotionSection>
			<section className="section-copy flex flex-col gap-2">
				<SectionHeading title="Hire Me" />
				<p>{hireText}</p>
				<div className="flex flex-wrap items-center gap-2.5">
					<ButtonLink href={emailLink}>
						<PiSuitcaseSimpleBold />
						Hire Me
					</ButtonLink>
					<ButtonLink href={resumeFilePath}>
						<PiFilePdfBold />
						Resume
					</ButtonLink>
				</div>
			</section>
		</MotionSection>
	);
};

export default Hire;