import SocialSection from "@/components/home/SocialSection";
import ImagePreview from "@/components/ui/ImagePreview";
import Image, { type ImageProps } from "next/image";

interface ProfileHeaderProps {
	userName: string;
	userBio: string;
	userImage: ImageProps["src"];
}

const ProfileHeader = ({
	userName,
	userBio,
	userImage,
}: ProfileHeaderProps) => {
	const imageAlt = "Profile Picture";

	return (
		<section className="flex flex-col items-center gap-3 text-center md:flex-row md:items-center md:gap-4 md:text-left">
			<div className="shrink-0">
				<ImagePreview
					src={userImage}
					alt={imageAlt}
					previewAlt={`${imageAlt} Preview`}
					dialogLabel="Profile picture preview"
					triggerAriaLabel="Open avatar preview"
					trigger={
						<span className="pro-pic-shell">
							<Image
								src={userImage}
								alt={imageAlt}
								className="pro-pic"
								fill
								preload
								placeholder={typeof userImage === "string" ? "empty" : "blur"}
								sizes="(max-width: 768px) 108px, 130px"
							/>
						</span>
					}
				/>
			</div>

			<div className="flex min-w-0 flex-col items-center justify-center gap-2 md:items-start">
				<div className="flex flex-col gap-1">
					<h1 className="head-name py-0 normal-case">{userName}</h1>
					<p>{userBio}</p>
				</div>
				<SocialSection />
			</div>
		</section>
	);
};

export default ProfileHeader;
