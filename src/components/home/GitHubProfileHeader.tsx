import ProfileHeader from "@/components/home/ProfileHeader";
import { profile, profileImage } from "@/data/github";
import { getGitHubAvatarUrl, getGitHubUser } from "@/lib/github";

const GitHubProfileHeader = async () => {
	const githubUser = await getGitHubUser(profile.githubUsername);
	const avatarUrl = getGitHubAvatarUrl(githubUser);

	return (
		<ProfileHeader
			userName={profile.name}
			userBio={profile.bio}
			userImage={avatarUrl ?? profileImage}
		/>
	);
};

export default GitHubProfileHeader;
