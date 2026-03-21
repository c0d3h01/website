import { unstable_cache } from "next/cache";

interface GitHubUser {
	avatar_url: string;
}

const githubApiBaseUrl = "https://api.github.com/users";

export const getGitHubUser = unstable_cache(
	async (username: string): Promise<GitHubUser | null> => {
		try {
			const response = await fetch(`${githubApiBaseUrl}/${username}`, {
				headers: {
					Accept: "application/vnd.github+json",
					...(process.env.GITHUB_TOKEN
						? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
						: {}),
				},
				next: { revalidate: 3600 },
			});

			if (!response.ok) {
				return null;
			}

			const data = (await response.json()) as GitHubUser;
			return data;
		} catch {
			return null;
		}
	},
	["github-user"],
	{ revalidate: 3600 },
);
