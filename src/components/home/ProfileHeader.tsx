"use client";

import { motion } from "motion/react";
import Image, { type ImageProps } from "next/image";
import SocialSection from "@/components/home/SocialSection";
import ImagePreview from "@/components/ui/ImagePreview";
import { gentleSpring, staggerContainer, staggerItem } from "@/lib/motion";

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
			<motion.div
				className="shrink-0"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={gentleSpring}
			>
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
			</motion.div>

			<motion.div
				className="flex min-w-0 flex-col items-center justify-center gap-2 md:items-start"
				variants={staggerContainer}
				initial="hidden"
				animate="visible"
			>
				<motion.div className="flex flex-col gap-1" variants={staggerItem}>
					<h1 className="head-name py-0 normal-case">{userName}</h1>
					<p>{userBio}</p>
				</motion.div>
				<motion.div variants={staggerItem}>
					<SocialSection />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default ProfileHeader;
