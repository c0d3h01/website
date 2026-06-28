import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/content";

const Skills = () => {
	return (
		<section className="section-static flex flex-col gap-2">
			<SectionHeading title="Skills & Tools" />
			<ul className="flex flex-wrap gap-1.5" aria-label="Skills and tools">
				{skills.map(({ icon: Icon, name }) => (
					<li
						key={name}
						className="skills-card select-none flex flex-row gap-1 items-center px-2 py-1 rounded-md"
					>
						<Icon />
						{name}
					</li>
				))}
			</ul>
		</section>
	);
};

export default Skills;
