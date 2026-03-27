import ProfileHeader from "@/components/home/ProfileHeader";
import { profile, profileImage } from "@/data/github";
import {
	getGitHubAvatarFallbackUrl,
	getGitHubAvatarUrl,
	getGitHubUser,
} from "@/lib/github";

const GitHubProfileHeader = async () => {
	const githubUser = await getGitHubUser(profile.githubUsername);
	const avatarUrl = getGitHubAvatarUrl(githubUser);
	const fallbackAvatarUrl = getGitHubAvatarFallbackUrl(profile.githubUsername);

	return (
		<ProfileHeader
			userName={profile.name}
			userBio={profile.bio}
			userImage={avatarUrl ?? fallbackAvatarUrl ?? profileImage}
		/>
	);
};

export default GitHubProfileHeader;
