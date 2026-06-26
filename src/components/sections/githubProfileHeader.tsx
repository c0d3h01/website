import ProfileHeader from "@/components/sections/profileHeader";
import { profile, profileAvatarUrl } from "@/content";

const GitHubProfileHeader = () => {
	return (
		<ProfileHeader
			userName={profile.name}
			userBio={profile.bio}
			userImage={profileAvatarUrl}
		/>
	);
};

export default GitHubProfileHeader;