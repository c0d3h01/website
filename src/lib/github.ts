import { unstable_cache } from "next/cache";

interface GitHubUser {
	avatar_url: string;
	updated_at?: string;
}

const githubApiBaseUrl = "https://api.github.com/users";
const githubUserRevalidateSeconds = 300;

const withCacheBuster = (url: string, version?: string): string => {
	if (!version) {
		return url;
	}

	const separator = url.includes("?") ? "&" : "?";
	return `${url}${separator}v=${encodeURIComponent(version)}`;
};

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
				next: { revalidate: githubUserRevalidateSeconds },
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
	{ revalidate: githubUserRevalidateSeconds },
);

export const getGitHubAvatarUrl = (
	githubUser: GitHubUser | null,
): string | null => {
	if (!githubUser?.avatar_url) {
		return null;
	}

	return withCacheBuster(githubUser.avatar_url, githubUser.updated_at);
};

export const getGitHubAvatarFallbackUrl = (username: string): string =>
	`https://avatars.githubusercontent.com/${encodeURIComponent(username)}`;
