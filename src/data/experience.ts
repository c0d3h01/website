export interface Experience {
	id: number;
	role: string;
	company: string;
	location: string;
	duration: string;
	isCurrent: boolean;
	highlights: string[];
}

export const experiences: Experience[] = [
	{
		id: 1,
		role: "Software Engineer",
		company: "Freelance",
		location: "Remote",
		duration: "2024 - Present",
		isCurrent: true,
		highlights: [
			"Designed and shipped backend services in Rust using Actix Web, with a focus on low-latency request handling and reliable production behavior.",
			"Built REST APIs and web application backends around HTTP fundamentals, including routing, middleware, authentication, validation, error handling, and API versioning.",
			"Worked across PostgreSQL, Redis, Docker, and CI/CD pipelines to deliver maintainable services with strong observability, performance tuning, and long-term support.",
		],
	},
];
