"use client";

import { motion, type Variants } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/content";

const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.04 },
	},
};

const item: Variants = {
	hidden: { opacity: 0, scale: 0.88 },
	show: {
		opacity: 1,
		scale: 1,
		transition: { type: "spring", stiffness: 360, damping: 24 },
	},
};

const Skills = () => {
	return (
		<section className="flex flex-col gap-3">
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
						whileHover={{ scale: 1.06, y: -1 }}
						key={name}
						className="skill-chip"
					>
						<Icon className="size-3 shrink-0" />
						{name}
					</motion.li>
				))}
			</motion.ul>
		</section>
	);
};

export default Skills;
