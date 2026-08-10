"use client";

import { motion, type Variants } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/content";

const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
		},
	},
};

const item: Variants = {
	hidden: { opacity: 0, scale: 0.8 },
	show: {
		opacity: 1,
		scale: 1,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
};

const Skills = () => {
	return (
		<section className="section-static flex flex-col gap-2">
			<SectionHeading title="Skills & Tools" />
			<motion.ul
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, margin: "-20px" }}
				className="flex flex-wrap gap-1.5"
				aria-label="Skills and tools"
			>
				{skills.map(({ icon: Icon, name }) => (
					<motion.li
						variants={item}
						whileHover={{
							scale: 1.05,
							y: -1,
						}}
						key={name}
						className="skills-card select-none flex flex-row gap-1 items-center px-2 py-1 rounded-md transition-colors hover:bg-(--gb-border)"
					>
						<Icon />
						{name}
					</motion.li>
				))}
			</motion.ul>
		</section>
	);
};

export default Skills;
