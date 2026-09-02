import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { DiJavascript } from "react-icons/di";
import { FaDocker, FaRust } from "react-icons/fa";
import { FaGithub, FaGolang, FaPython } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { RiNextjsLine, RiReactjsLine } from "react-icons/ri";
import { SiDjango, SiNixos, SiPostman } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { VscTerminalLinux } from "react-icons/vsc";
import SectionHeading from "@/components/ui/SectionHeading";

type Skill = {
	icon: React.ComponentType;
	name: string;
};

const skills: Skill[] = [
	{ icon: FaGolang, name: "Go" },
	{ icon: FaRust, name: "Rust" },
	{ icon: FaPython, name: "Python" },
	{ icon: BsFiletypeSql, name: "SQL" },
	{ icon: IoLogoNodejs, name: "Node.js" },
	{ icon: SiDjango, name: "Django" },
	{ icon: BiLogoPostgresql, name: "PostgreSQL" },
	{ icon: FaDocker, name: "Docker" },
	{ icon: VscTerminalLinux, name: "Linux" },
	{ icon: SiNixos, name: "Nix, NixOS" },
	{ icon: FaGithub, name: "GitHub Actions" },
	{ icon: SiPostman, name: "API Testing" },
	{ icon: TbBrandTypescript, name: "TypeScript" },
	{ icon: DiJavascript, name: "JavaScript" },
	{ icon: RiReactjsLine, name: "React" },
	{ icon: RiNextjsLine, name: "Next.js" },
];

const Skills = () => {
	return (
		<section className="section-static flex flex-col gap-2">
			<SectionHeading title="Skills & Tools" />
			<ul className="flex flex-wrap gap-1.5" aria-label="Skills and tools">
				{skills.map(({ icon: Icon, name }) => (
					<li
						key={name}
						className="skills-card select-none flex flex-row gap-1 items-center px-2 py-1 rounded-md transition-colors hover:bg-(--gb-border)"
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
