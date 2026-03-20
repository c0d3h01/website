import Image, { type ImageProps } from "next/image";
import ImagePreview from "@/components/ui/ImagePreview";

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
		<section>
			<div className="flex items-center gap-3 md:gap-4">
				<div className="w-1/3 shrink-0 md:w-auto">
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

				<div className="flex min-w-0 flex-col justify-center gap-1 text-left">
					<h1 className="head-name py-0 normal-case">{userName}</h1>
					<p>{userBio}</p>
				</div>
			</div>
		</section>
	);
};

export default ProfileHeader;
