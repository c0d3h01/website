import ProfileHeader from "@/components/home/ProfileHeader";
import { profile, profileImage } from "@/data/github";
import { getGitHubUser } from "@/lib/github";

const GitHubProfileHeader = async () => {
	const githubUser = await getGitHubUser(profile.githubUsername);

	return (
		<ProfileHeader
			userName={profile.name}
			userBio={profile.bio}
			userImage={githubUser?.avatar_url ?? profileImage}
		/>
	);
};

export default GitHubProfileHeader;
