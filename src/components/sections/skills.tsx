"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/content";
import { staggerContainer, staggerItem } from "@/lib/utils";

const Skills = () => {
	return (
		<section className="flex flex-col gap-2">
			<SectionHeading title="Skills & Tools" />
			<motion.ul
				className="flex flex-wrap gap-1.5"
				aria-label="Skills and tools"
				variants={staggerContainer}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-40px" }}
			>
				{skills.map(({ icon: Icon, name }) => (
					<motion.li key={name} className="skills-card" variants={staggerItem}>
						<Icon />
						{name}
					</motion.li>
				))}
			</motion.ul>
		</section>
	);
};

export default Skills;