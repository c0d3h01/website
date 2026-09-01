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
		<section className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
			<div className="flex max-w-3xl flex-col gap-6">
				<p className="eyebrow">
					{userName} · Backend &amp; systems engineer · Mumbai, India
				</p>
				<div className="flex flex-col gap-4">
					<h1 className="max-w-2xl text-balance text-5xl font-bold leading-[.98] tracking-[-.07em] sm:text-7xl md:text-8xl">
						I build the parts of software you don&apos;t see.
					</h1>
					<p className="max-w-xl text-lg leading-7 text-muted-foreground sm:text-xl">
						{userBio} focused on reliable services, distributed systems, and
						performance-critical products.
					</p>
				</div>
				<div className="flex flex-wrap items-center gap-3">
					<a
						href="#work"
						className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
					>
						See selected work{" "}
						<span aria-hidden className="ml-2">
							↘
						</span>
					</a>
					<span className="flex items-center gap-2 px-2 text-sm text-muted-foreground">
						<span className="size-2 rounded-full bg-primary" aria-hidden />
						Available for select projects
					</span>
				</div>
			</div>
			<div className="flex flex-col items-center gap-5 md:items-end">
				<ImagePreview
					src={userImage}
					alt={imageAlt}
					previewAlt={`${imageAlt} Preview`}
					dialogLabel="Profile picture preview"
					triggerAriaLabel="Open avatar preview"
					trigger={
						<span className="pro-pic-shell relative block size-28 select-none sm:size-36">
							<Image
								src={userImage}
								alt={imageAlt}
								className="pro-pic"
								fill
								preload
								sizes="144px"
							/>
						</span>
					}
				/>
				<Social />
			</div>
		</section>
	);
};
export default ProfileHeader;
