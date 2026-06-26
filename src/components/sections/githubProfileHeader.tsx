import ProfileHeader from "@/components/sections/profileHeader";
import { profile, profileAvatarUrl } from "@/content";

const GitHubProfileHeader = () => {
	return (
		<div className="section-profile">
			<ProfileHeader
				userName={profile.name}
				userBio={profile.bio}
				userImage={profileAvatarUrl}
			/>
		</div>
	);
};

export default GitHubProfileHeader;