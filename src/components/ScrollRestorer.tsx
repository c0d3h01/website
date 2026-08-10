"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// Restore scroll position on back/forward and on in-app navigation that
// lands on a previously-visited page. Saves the current scroll keyed by
// pathname right before the route changes, and applies the saved value
// after the new page commits.
//
// `scrollRestoration: true` in next.config.ts only handles the browser
// back/forward case; this component covers in-app link clicks too.

const ScrollRestorer = () => {
	const pathname = usePathname();
	const lastPathRef = useRef<string | null>(null);
	const restoredRef = useRef(false);

	// Save scroll for the outgoing page.
	useEffect(() => {
		if (lastPathRef.current === pathname) return;

		if (lastPathRef.current) {
			try {
				sessionStorage.setItem(
					`scroll:${lastPathRef.current}`,
					String(window.scrollY),
				);
			} catch {
				// sessionStorage unavailable (private mode, quota); skip silently.
			}
		}

		lastPathRef.current = pathname;
		restoredRef.current = false;
	}, [pathname]);

	// Restore scroll on the new page once it's committed. Two RAFs because
	// route content mounts asynchronously after the pathname effect fires.
	useEffect(() => {
		if (restoredRef.current) return;

		let saved: number | null = null;
		try {
			const raw = sessionStorage.getItem(`scroll:${pathname}`);
			if (raw !== null) saved = Number.parseInt(raw, 10);
		} catch {
			// ignore
		}

		// Fresh page (no saved value, or first ever visit) — keep the browser default.
		if (saved === null || Number.isNaN(saved)) {
			restoredRef.current = true;
			return;
		}

		const raf = requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				window.scrollTo({ top: saved as number, behavior: "instant" });
				restoredRef.current = true;
			});
		});

		return () => cancelAnimationFrame(raf);
	}, [pathname]);

	// Also save on tab hide / unload in case the user closes mid-session.
	useEffect(() => {
		const save = () => {
			try {
				sessionStorage.setItem(`scroll:${pathname}`, String(window.scrollY));
			} catch {
				// ignore
			}
		};
		window.addEventListener("pagehide", save);
		return () => window.removeEventListener("pagehide", save);
	}, [pathname]);

	return null;
};

export default ScrollRestorer;
