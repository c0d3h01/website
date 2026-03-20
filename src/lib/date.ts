const shortFormatter = new Intl.DateTimeFormat("en-US", {
	year: "numeric",
	month: "short",
	day: "numeric",
	timeZone: "UTC",
});

const longFormatter = new Intl.DateTimeFormat("en-US", {
	year: "numeric",
	month: "long",
	day: "numeric",
	timeZone: "UTC",
});

export const formatShortDate = (date: string) =>
	shortFormatter.format(new Date(date));

export const formatLongDate = (date: string) =>
	longFormatter.format(new Date(date));
