import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data";

const SkillsSection = () => {
	return (
		<section className="flex flex-col gap-2">
			<SectionHeading title="Skills & Tools" />
			<div className="flex flex-wrap gap-1.5">
				{skills.map(({ id, icon: Icon, text }) => (
					<span key={id} className="skills-card">
						<Icon />
						{text}
					</span>
				))}
			</div>
		</section>
	);
};

export default SkillsSection;
