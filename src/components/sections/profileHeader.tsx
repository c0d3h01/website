import Image, { type ImageProps } from "next/image";
import Social from "@/components/sections/social";
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
		<section className="grid items-center gap-8 border-b border-(--gb-border) pb-14 sm:grid-cols-[auto_1fr] sm:gap-10 md:grid-cols-[10rem_1fr] md:pb-20">
			<div className="shrink-0">
				<ImagePreview
					src={userImage}
					alt={imageAlt}
					previewAlt={`${imageAlt} Preview`}
					dialogLabel="Profile picture preview"
					triggerAriaLabel="Open avatar preview"
					trigger={
						<span className="pro-pic-shell relative block size-24 border-4 border-(--gb-accent-soft) sm:size-28 md:size-32 select-none">
							<Image
								src={userImage}
								alt={imageAlt}
								className="pro-pic block size-full object-cover"
								fill
								preload
								placeholder={typeof userImage === "string" ? "empty" : "blur"}
								sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 130px"
							/>
						</span>
					}
				/>
			</div>

			<div className="flex min-w-0 flex-col items-start justify-center gap-5">
				<div className="flex flex-col gap-2">
					<p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-(--gb-yellow)">
						Backend and systems engineer
					</p>
					<h1 className="text-balance font-bold text-4xl leading-[1.05] tracking-[-0.06em] text-(--gb-fg0) sm:text-5xl md:text-6xl">
						{userName}
					</h1>
					<p>{userBio}</p>
				</div>
				<Social />
			</div>
		</section>
	);
};

export default ProfileHeader;
