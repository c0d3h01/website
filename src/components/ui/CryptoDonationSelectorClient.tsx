"use client";

import dynamic from "next/dynamic";

// Crypto donation widget bundles clipboard usage, scroll/click listeners,
// and a motion dropdown. Defer all of that until after the initial paint
// by loading the implementation only on the client.
const CryptoDonationSelector = dynamic(
	() => import("@/components/ui/CryptoDonationSelector"),
	{
		ssr: false,
		loading: () => (
			<span
				aria-hidden="true"
				className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap opacity-0"
			>
				Crypto
			</span>
		),
	},
);

const CryptoDonationSelectorClient = () => <CryptoDonationSelector />;

export default CryptoDonationSelectorClient;
