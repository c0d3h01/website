import Image from "next/image";
import Social from "@/components/sections/social";
import ImagePreview from "@/components/ui/ImagePreview";
import { profile, profileAvatarUrl } from "@/content";

const imageAlt = "Profile Picture";

// Character count for the CSS typewriter animation.
// "Harshal Sawant" = 14 chars — JetBrains Mono is monospace so 14ch = exact width.
// Update the `steps(14)` in globals.css if the name changes.

const ProfileHeader = () => {
	return (
		<section className="section-profile flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
			{/* Avatar */}
			<div className="flex justify-center shrink-0 sm:justify-start">
				<ImagePreview
					src={profileAvatarUrl}
					alt={imageAlt}
					previewAlt={`${imageAlt} Preview`}
					dialogLabel="Profile picture preview"
					triggerAriaLabel="Open avatar preview"
					trigger={
						<span className="avatar-shell size-20 sm:size-24">
							<Image
								src={profileAvatarUrl}
								alt={imageAlt}
								className="avatar-img"
								fill
								preload
								placeholder="empty"
								sizes="(max-width: 640px) 80px, 96px"
							/>
						</span>
					}
				/>
			</div>

			{/* Identity */}
			<div className="flex flex-col items-center gap-2.5 sm:items-start">
				{/* Terminal prompt — decorative, hidden from assistive tech */}
				<p className="terminal-prompt" aria-hidden="true">
					$ whoami
				</p>

				{/* Typewriter name — text in DOM is read by screen readers regardless of overflow:hidden */}
				<h1 className="terminal-name">{profile.name}</h1>

				{/* Role badge */}
				<span className="role-badge">
					<span className="opacity-40 select-none mr-0.5">[</span>
					{profile.bio}
					<span className="opacity-40 select-none ml-0.5">]</span>
				</span>

				{/* Social links */}
				<Social />
			</div>
		</section>
	);
};

export default ProfileHeader;
