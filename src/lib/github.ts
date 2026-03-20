interface GitHubUser {
  avatar_url: string
}

const githubApiBaseUrl = "https://api.github.com/users"

export const getGitHubUser = async (
  username: string,
): Promise<GitHubUser | null> => {
  try {
    const response = await fetch(`${githubApiBaseUrl}/${username}`, {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 60 * 60 },
    })

    if (!response.ok) {
      return null
    }

    const data = (await response.json()) as GitHubUser
    return data
  } catch {
    return null
  }
}
