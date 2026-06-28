import type { Metadata } from "next";
import type { ComponentType } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { DiJavascript } from "react-icons/di";
import { FaDocker, FaRust } from "react-icons/fa";
import {
	FaGithub,
	FaGolang,
	FaLinkedinIn,
	FaPython,
	FaRegHeart,
	FaXTwitter,
} from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { RiNextjsLine, RiReactjsLine } from "react-icons/ri";
import {
	SiBitcoin,
	SiBuymeacoffee,
	SiDjango,
	SiEthereum,
	SiNixos,
	SiPostman,
	SiSolana,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { VscTerminalLinux } from "react-icons/vsc";

export type IconComponent = ComponentType<{ className?: string }>;

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------

interface Profile {
	name: string;
	shortName: string;
	bio: string;
	githubUsername: string;
	twitterHandle: string;
	linkedinSlug: string;
	codeforcesUsername: string;
	calComUsername: string;
	email: string;
	website: string;
	support: {
		githubSponsorsUsername: string;
		buyMeACoffeeUsername: string;
		bitcoinAddress: string;
		ethereumAddress: string;
		solanaAddress: string;
		upiId: string;
	};
	aboutHtml: string;
}

export const profile: Profile = {
	name: "Harshal Sawant",
	shortName: "Harshal",
	bio: "Software Engineer",
	githubUsername: "c0d3h01",
	twitterHandle: "haarshalsawant",
	linkedinSlug: "haarshalsawant",
	codeforcesUsername: "c0d3h01",
	calComUsername: "c0d3h01",
	email: "harshalsawant.dev@gmail.com",
	website: "https://www.c0d3h01.tech",
	support: {
		githubSponsorsUsername: "c0d3h01",
		buyMeACoffeeUsername: "c0d3h01",
		bitcoinAddress: "bc1qdy2acxf0jk4j94stnmccnkyk5avfhqqc09xjvl",
		ethereumAddress: "0x87EdD72c510ecc537B167FF21ef726B62f7f600B",
		solanaAddress: "4RdWWahnTrrtFfFCWy2wgznYGcJseCotphaPbcpSnR8H",
		upiId: "harshalsawant.dev@okicici",
	},
	aboutHtml: `
  <p>
		I&apos;m Harshal Sawant, a backend and systems engineer based in Mumbai, India. I got into programming the hard way - through Android rooting, kernel modules, and digging into Linux internals - and never really stopped going deeper.
  </p>
  <p>
		Today I build low-latency backend services, distributed systems, and developer tooling, mostly in Rust and Go. I care about things that most people abstract away: scheduler behavior, memory pressure, syscall overhead, and what actually happens under the hood when your system is under load.
	</p>
`,
};

/**
 * Tokenless profile picture: GitHub serves the user's avatar directly from
 * `github.com/<username>.png` without authentication, no API call, no quota.
 */
export const profileAvatarUrl = `https://github.com/${profile.githubUsername}.png`;

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

interface Skill {
	icon: IconComponent;
	name: string;
}

export const skills: Skill[] = [
	{ icon: FaGolang, name: "Go" },
	{ icon: FaRust, name: "Rust" },
	{ icon: FaPython, name: "Python" },
	{ icon: BsFiletypeSql, name: "SQL" },
	{ icon: IoLogoNodejs, name: "Node.js" },
	{ icon: SiDjango, name: "Django" },
	{ icon: BiLogoPostgresql, name: "PostgreSQL" },
	{ icon: FaDocker, name: "Docker" },
	{ icon: VscTerminalLinux, name: "Linux" },
	{ icon: SiNixos, name: "Nix, NixOS" },
	{ icon: FaGithub, name: "GitHub Actions" },
	{ icon: SiPostman, name: "API Testing" },
	{ icon: TbBrandTypescript, name: "TypeScript" },
	{ icon: DiJavascript, name: "JavaScript" },
	{ icon: RiReactjsLine, name: "React" },
	{ icon: RiNextjsLine, name: "Next.js" },
];

// ---------------------------------------------------------------------------
// SEO / site metadata
// ---------------------------------------------------------------------------

const normalizeSiteUrl = (url: string) => url.replace(/\/$/, "");

const isValidAbsoluteUrl = (url: string) => {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
};

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "";

export const siteUrl =
	configuredSiteUrl && isValidAbsoluteUrl(configuredSiteUrl)
		? normalizeSiteUrl(configuredSiteUrl)
		: normalizeSiteUrl(profile.website);

const siteTitle = profile.name;
const siteDescription =
	"Portfolio of Harshal Sawant - Software Engineer focused on distributed systems, developer tooling, and high-performance software.";

export const defaultOgImage = "/favicon.ico";

export const seoMetadata: Metadata = {
	title: {
		default: siteTitle,
		template: `%s | ${profile.name}`,
	},
	description: siteDescription,
	keywords: [
		"Harshal Sawant",
		"Portfolio",
		"Software Engineer",
		"Distributed Systems",
		"TypeScript",
		"Node.js",
		"High Performance Systems",
	],
	authors: [{ name: profile.name }],
	creator: profile.name,
	alternates: {
		canonical: "/",
	},
	metadataBase: new URL(siteUrl),
	icons: {
		icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
		shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
	},
	openGraph: {
		title: siteTitle,
		description: siteDescription,
		url: siteUrl,
		siteName: profile.name,
		images: [
			{
				url: defaultOgImage,
				width: 1200,
				height: 630,
				alt: siteTitle,
			},
		],
		locale: "en-IN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: siteTitle,
		description: siteDescription,
		images: [defaultOgImage],
		creator: `@${profile.twitterHandle}`,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

// ---------------------------------------------------------------------------
// Blog metadata shape
// ---------------------------------------------------------------------------

export interface BlogPostMeta {
	slug: string;
	title: string;
	description: string;
	date: string;
}

// ---------------------------------------------------------------------------
// Projects (single source of truth — no live API metrics)
// ---------------------------------------------------------------------------

export type ProjectStatus = "active" | "building" | "archived";

export interface Project {
	id: number;
	slug: string;
	title: string;
	status: ProjectStatus;
	description: string;
	highlights: string[];
	liveUrl: string;
	githubUrl: string;
	techStack: string[];
	bannerImage: string;
	previewVideo: string;
}

export const projects: Project[] = [
	{
		id: 1,
		slug: "androidtweaker",
		title: "androidtweaker",
		status: "archived",
		description:
			"Built and maintained a shell-driven Android optimization toolkit for rooted devices, focused on runtime tuning, repeatable tweak workflows, and easier long-term maintenance.",
		highlights: [
			"Built a shell-first automation workflow to apply performance tweaks consistently on rooted Android devices.",
			"Added repeatable profiles for CPU, memory, and background-task behavior to reduce manual trial-and-error.",
			"Kept the toolkit modular so tweaks can be added or removed safely during long-term maintenance.",
		],
		liveUrl: "",
		githubUrl: "https://github.com/c0d3h01/androidtweaker",
		techStack: ["Shell", "Android", "Linux", "Performance Tuning"],
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
	{
		id: 2,
		slug: "coretaskoptimizer",
		title: "coretaskoptimizer",
		status: "active",
		description:
			"Implemented a native C++ root module that applies CPU affinity, scheduler policy, and I/O priority to critical Android system tasks with low-overhead boot-time execution.",
		highlights: [
			"Implemented a native module that applies task scheduling and affinity rules during boot with minimal overhead.",
			"Focused on critical system process prioritization to keep foreground responsiveness stable under load.",
			"Designed the rule pipeline for low-level Linux controls such as scheduler policy and I/O priority.",
		],
		liveUrl: "",
		githubUrl: "https://github.com/c0d3h01/coretaskoptimizer",
		techStack: ["C++", "CMake", "Linux Syscalls", "Kernel Optimization"],
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
	{
		id: 3,
		slug: "url-shortener",
		title: "shrty",
		status: "building",
		description:
			"A URL shortener with click analytics, geo-IP lookup, and a write-heavy cache layer. Designed to handle viral-link hot-key scenarios without melting Redis.",
		highlights: [
			"REST API in Go (Fiber or Chi) for short-link creation, redirect, and click-event ingestion with rate-limited public endpoints.",
			"Base62 short-code generator with nanoid fallback and collision check against the `links` table before insert.",
			"Postgres schema for links, clicks, and referrers, with partitioning on the clicks table by month to bound retention cost.",
			"Redis cache in front of Postgres for redirect lookups, with jittered TTLs and read-through replicas to absorb hot-link spikes.",
			"Asynchronous click-event ingest path: redirect returns 302 immediately, click is enqueued via Redis Streams and batched into ClickHouse.",
			"Geo-IP resolution via MaxMind GeoLite2 served from a Cloudflare Worker edge cache to keep lookup latency under 5 ms.",
			"Observability with OpenTelemetry traces, Prometheus metrics (`shrty_redirects_total`, `shrty_cache_hit_ratio`), and pprof in non-prod.",
			"Docker Compose stack: app, Postgres 16, Redis 7, ClickHouse, and a seed script that loads 1 M synthetic links for load tests.",
		],
		liveUrl: "",
		githubUrl: "",
		techStack: ["Go", "Postgres", "Redis", "ClickHouse", "OpenTelemetry", "Docker", "Cloudflare Workers"],
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
	{
		id: 4,
		slug: "api-gateway-token-bucket",
		title: "ratelock",
		status: "building",
		description:
			"A per-tenant API gateway built around atomic Redis Lua token buckets, plan-aware quotas, per-route cost weights, and standard X-RateLimit response headers.",
		highlights: [
			"Edge gateway in Go using `net/http` reverse proxy mode, terminating TLS and forwarding to upstream service meshes.",
			"Atomic token-bucket implementation in Redis Lua (HSET of tokens + last-refill, EVAL'd per request) to avoid check-then-set races.",
			"Plan-aware quota engine: `free`, `pro`, `enterprise` plans each carry burst capacity, refill rate, and per-route cost weights.",
			"Per-route weight table so cheap routes (`GET /healthz`) cost 0 tokens while expensive routes (`POST /reports`) cost 50 tokens.",
			"Standard response headers on every request: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`, plus `Retry-After` on 429.",
			"Tenant identification via JWT claim, API key header, or `X-Tenant-Id` for service-to-service traffic, all validated against a Redis cache.",
			"`GET /v1/me/limits` debug endpoint that returns current bucket state, plan tier, and refill schedule for the calling tenant.",
			"Load-tested with k6 against 1k simulated tenants, including one noisy neighbor scenario to validate isolation.",
		],
		liveUrl: "",
		githubUrl: "",
		techStack: ["Go", "Redis", "Lua", "Postgres", "k6", "OpenTelemetry", "Docker"],
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
	{
		id: 5,
		slug: "job-queue-skip-locked",
		title: "queueq",
		status: "building",
		description:
			"A job queue built on Postgres `SELECT ... FOR UPDATE SKIP LOCKED`, with exponential backoff, dead-letter handling, and per-job visibility timeouts — no extra broker required.",
		highlights: [
			"Work-claiming query: `UPDATE jobs SET status='running', locked_until=now()+interval '30 seconds' WHERE id IN (SELECT id FROM jobs WHERE ... FOR UPDATE SKIP LOCKED LIMIT 10)`.",
			"Job schema with idempotency key, attempt count, max attempts, and last error captured as JSONB for replay debugging.",
			"Workers re-claim stale jobs past `locked_until` via a heartbeat sweeper cron that runs every 10 seconds.",
			"Exponential backoff with jitter between retries; jobs past `max_attempts` move to a `dead_letter_jobs` table with full payload preserved.",
			"At-least-once delivery by design; consumers must be idempotent on business keys (documented and enforced via lint rules on handler signatures).",
			"Dashboard UI (Next.js) showing queue depth, oldest job age, success/failure rate, and DLQ entries with replay buttons.",
			"Single-binary CLI for enqueuing jobs from cron scripts and shell pipelines, with optional stdin-payload mode.",
			"Integration tests that run 10k concurrent jobs against a Postgres container to validate throughput and zero double-processing.",
		],
		liveUrl: "",
		githubUrl: "",
		techStack: ["Postgres", "Node.js", "TypeScript", "Next.js", "Docker"],
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
	{
		id: 6,
		slug: "multitenant-saas-boilerplate",
		title: "tenantkit",
		status: "building",
		description:
			"A multi-tenant SaaS starter with Postgres Row-Level Security, JWT-based tenant identity, and shared-schema isolation. The point is the safety net: even a missing `WHERE tenant_id =` clause cannot leak data.",
		highlights: [
			"Postgres RLS policies on every tenant-scoped table (`accounts`, `projects`, `api_keys`, `audit_logs`) keyed off `current_setting('app.tenant_id')`.",
			"Express middleware that decodes the JWT, extracts `tenant_id`, and runs every query inside a transaction that sets the GUC via `SET LOCAL`.",
			"ORM wrapper (Drizzle or Prisma plugin) that auto-injects the RLS session variable and refuses raw `db.execute` without it.",
			"Shared-schema migrations with tenant-scoped indexes; no schema-per-tenant to keep migration complexity linear in tenants.",
			"Tenant onboarding flow: create tenant row → provision default plan → seed empty workspace → return first admin API key.",
			"Auth: email/password, magic link, and SSO (OIDC) all returning JWTs with `tenant_id` and `role` claims.",
			"Automated security test suite that runs every API endpoint with two different tenant JWTs and asserts no cross-tenant data is returned.",
			"Deployable to Fly.io or Railway on the free tier; one Postgres instance, one app instance, one Redis instance.",
		],
		liveUrl: "",
		githubUrl: "",
		techStack: ["Postgres", "Row-Level Security", "Node.js", "TypeScript", "Express", "Drizzle ORM", "Docker"],
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
	{
		id: 7,
		slug: "webhook-delivery",
		title: "relayhook",
		status: "building",
		description:
			"An outbound webhook delivery service: HMAC-signed payloads, exponential-backoff retries, per-recipient circuit breakers, dead-letter queue, and a replay endpoint for support engineers.",
		highlights: [
			"Outbound worker in Go that polls `pending_deliveries` and POSTs payloads with `X-Signature: sha256=...` headers computed from a per-recipient secret.",
			"Retry policy: 7 attempts over 24 hours with exponential backoff and full jitter to avoid synchronized retry storms.",
			"Per-recipient circuit breaker (closed/open/half-open) keyed off the recipient URL — one slow partner cannot stall all deliveries.",
			"Dead-letter queue (Postgres table) holding failed deliveries with full request/response for the last attempt and a one-click replay action.",
			"Replay endpoint `POST /v1/deliveries/:id/replay` that re-enqueues a specific historical delivery for debugging without manual DB writes.",
			"Per-recipient delivery dashboard: success rate, p50/p99 latency, current circuit state, recent failures with status codes.",
			"Signed payload format follows the Stripe convention (timestamp + body, signed together) to make replay attacks detectable.",
			"Load-tested with 10k recipient URLs (some returning 500 forever) to verify breakers isolate failures and the queue drains.",
		],
		liveUrl: "",
		githubUrl: "",
		techStack: ["Go", "Postgres", "Redis", "HMAC", "OpenTelemetry", "Docker", "k6"],
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
	{
		id: 8,
		slug: "log-search-engine",
		title: "logfind",
		status: "building",
		description:
			"An in-process distributed log search engine with tokenized indexing, posting lists, BM25 ranking, and time-range filtering. Built to query millions of log lines locally without external services.",
		highlights: [
			"Inverted index stored in RocksDB with a custom token analyzer handling lowercase normalization, stop words, and numeric tokens.",
			"Posting lists per term with per-document TF and per-field weights (message vs service vs level).",
			"BM25 ranking with configurable k1 and b parameters, plus per-field boosts expressed in the query DSL.",
			"Query DSL: `service:api level:error status:>=500 message:\"timeout\" within:5m` — parsed into a query plan tree.",
			"Time-range filters via per-shard min/max timestamp watermarks, allowing whole-day segments to be skipped without disk I/O.",
			"Ingest path that accepts structured JSON logs over HTTP and batches writes into RocksDB with a configurable flush interval.",
			"Retention sweeper that drops time-partitioned segments older than N days; tested against a 100 GB synthetic corpus.",
			"CLI REPL for interactive search plus a small HTTP API; both share the same query planner.",
		],
		liveUrl: "",
		githubUrl: "",
		techStack: ["Rust", "RocksDB", "HTTP", "BM25", "Docker"],
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
	{
		id: 9,
		slug: "feature-flag-service",
		title: "flagforge",
		status: "building",
		description:
			"A feature flag service with percentage rollouts via consistent hashing, targeting rules, a full audit log of who flipped what, and kill switches wired to on-call alerting.",
		highlights: [
			"Flag evaluation endpoint `POST /v1/evaluate` taking a context (`user_id`, attributes) and returning boolean plus a `reason` for traceability.",
			"Percentage rollouts via consistent hashing of `user_id` to a 0-9999 bucket, so the same user gets the same answer across requests and services.",
			"Targeting rules engine: `user.email endsWith @example.com`, `user.plan == 'pro'`, `country in [...]`, all composable as AND/OR trees.",
			"Audit log table capturing every flag change: who, when, old value, new value, optional change ticket reference.",
			"Read path served from a region-local Redis cache; writes invalidate cache across all replicas via a pub/sub channel.",
			"Kill switch flags that, when enabled, force-off downstream features regardless of rule evaluation — wired to on-call via a separate alerting channel.",
			"SDKs for Node, Go, and Python that batch evaluations locally for 5 seconds to keep network overhead under 1 ms per check.",
			"Admin UI (Next.js) with flag list, diff view for changes, and a staging-vs-prod split to test rule edits safely.",
		],
		liveUrl: "",
		githubUrl: "",
		techStack: ["Node.js", "TypeScript", "Postgres", "Redis", "Next.js", "Docker"],
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
	{
		id: 10,
		slug: "event-sourced-ledger",
		title: "ledgered",
		status: "building",
		description:
			"An event-sourced double-entry ledger: append-only event store, deterministic projections, snapshot optimization, and time-travel queries for audit.",
		highlights: [
			"Append-only `events` table with `stream_id`, `version`, `type`, `payload JSONB`, and `recorded_at`; uniqueness on `(stream_id, version)` enforced.",
			"Double-entry invariant: every event moves funds between accounts and the projection enforces that the sum of all balances is zero.",
			"Projection rebuild from any snapshot point, using deterministic event handlers that have no I/O and are pure functions of event + state.",
			"Snapshot table with `stream_id`, `last_version`, `state JSONB`; new projections hydrate from the latest snapshot and replay only delta events.",
			"Time-travel query: `GET /accounts/:id/balance?at=2026-01-15T00:00:00Z` walks the event log to compute the balance as of any timestamp.",
			"Idempotent event handlers keyed off `(stream_id, version)` so retries from the queue never double-apply events.",
			"Replay test in CI: every PR rebuilds the entire projection against a frozen event log and diffs the output against a checked-in golden file.",
			"Admin UI that lists streams, shows event history per stream, and surfaces projection drift alerts with a `Rebuild` action.",
		],
		liveUrl: "",
		githubUrl: "",
		techStack: ["Postgres", "Node.js", "TypeScript", "Event Sourcing", "CQRS", "Next.js", "Docker"],
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
	{
		id: 11,
		slug: "realtime-notification-fanout",
		title: "pingmesh",
		status: "building",
		description:
			"A real-time notification fanout service: WebSocket gateway with per-user channels, cross-node pub/sub, presence with TTL, and graceful reconnect handling for flaky mobile networks.",
		highlights: [
			"WebSocket gateway in Go using `gorilla/websocket`, fronted by an Envoy or nginx sticky-session load balancer.",
			"Per-user channel routing with Redis pub/sub (or NATS JetStream) so any node can publish to any user's channel and all subscribed nodes deliver it.",
			"Presence service backed by a TTL-keyed Redis hash with heartbeat refresh from clients every 15 s; offline users receive notifications on next reconnect.",
			"Backpressure: per-connection outbound buffer cap (256 KB) and slow-consumer detection that closes the connection with a `1011` close code and reconnect hint.",
			"Reconnect protocol: client passes `Last-Event-Id` on reconnect, gateway replays missed events from a per-channel buffer (last 5 minutes).",
			"Notification fanout worker that consumes from a Postgres-backed queue (project #5) and publishes to the gateway via the pub/sub layer.",
			"Horizontal scale test: 50k concurrent connections across 4 nodes, validating pub/sub fanout latency stays under 100 ms p99.",
			"Mobile-friendly fallbacks: server-sent events (SSE) endpoint for clients that cannot open WebSockets (corporate proxies, captive portals).",
		],
		liveUrl: "",
		githubUrl: "",
		techStack: ["Go", "WebSockets", "Redis", "NATS JetStream", "Postgres", "Docker", "Envoy"],
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
	{
		id: 12,
		slug: "time-series-metrics-store",
		title: "metricvault",
		status: "building",
		description:
			"A time-series metrics store with rollup windows, retention tiers, per-tenant label cardinality budgets, and a Prometheus-compatible query surface for `rate()` and `increase()` aggregations.",
		highlights: [
			"Ingest endpoint accepting Prometheus remote-write and OTLP metrics, validated and rejected with explicit errors when label cardinality exceeds per-tenant caps.",
			"Storage in TimescaleDB (or a custom columnar store) with hypertable partitioning by 1-hour chunks and per-tenant spaces for clean isolation.",
			"Rollup continuous aggregates: 1m, 5m, 1h, 1d — automatically refreshed and used by the query planner when the requested window matches.",
			"Retention tiers: raw 7 days, 5m rollup 30 days, 1h rollup 1 year, 1d rollup indefinitely — moved by a daily background job.",
			"Query API implementing `rate()`, `increase()`, `irate()`, `sum by()`, `histogram_quantile()` against the rollup layers with automatic time-window selection.",
			"Per-tenant cardinality budget enforced at ingest: any label combination beyond 100k unique series is rejected and counted in a `cardinality_exceeded_total` metric.",
			"Storage cost math dashboard: per-tenant series count, bytes stored, projected monthly cost — visible to SEs so they can advise customers.",
			"Integration tests using a 1 B-sample synthetic dataset to validate query latency under rollup selection and ensure retention jobs do not block ingest.",
		],
		liveUrl: "",
		githubUrl: "",
		techStack: ["TimescaleDB", "Postgres", "Prometheus", "OTLP", "Go", "Docker"],
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
];

export const getProjectBySlug = (slug: string) =>
	projects.find((project) => project.slug === slug);

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export interface Experience {
	id: number;
	role: string;
	company: string;
	location: string;
	duration: string;
	isCurrent: boolean;
	highlights: string[];
}

export const experiences: Experience[] = [
	{
		id: 1,
		role: "Software Engineer",
		company: "Freelance",
		location: "Remote",
		duration: "2024 - Present",
		isCurrent: true,
		highlights: [
			"Designed and shipped backend services across URL shorteners, per-tenant API gateways, Postgres SKIP LOCKED job queues, multi-tenant SaaS starters, outbound webhook delivery, in-process log search, feature flag services, event-sourced ledgers, real-time WebSocket fanout, and time-series metrics stores — primarily in Go and Rust.",
			"Went deep on the data layer: atomic token-bucket in Redis Lua, `SELECT ... FOR UPDATE SKIP LOCKED` job claim, Postgres Row-Level Security for tenant isolation, HMAC-signed Stripe-style webhook payloads with per-recipient circuit breakers, BM25 inverted index over RocksDB, consistent-hashed percentage rollouts, and TimescaleDB rollup windows.",
			"Owned end-to-end delivery: schema design, ingest paths, retry/backoff with jitter, dead-letter handling, OpenTelemetry traces plus Prometheus metrics, k6 load tests for noisy-neighbor and viral-link scenarios, Docker Compose stacks, and CI hardening with replay tests against frozen golden corpora.",
		],
	},
];

// ---------------------------------------------------------------------------
// Social, hire + support
// ---------------------------------------------------------------------------

export const emailLink = `mailto:${profile.email}?subject=Interested%20in%20Hiring%20You`;
export const resumeFilePath = "/assets/docs/resume.pdf";

interface SocialLink {
	id: number;
	name: string;
	href: string;
	icon: IconComponent;
}

export const SocialLinks: SocialLink[] = [
	{
		id: 1,
		name: "Email",
		href: `mailto:${profile.email}`,
		icon: MdOutlineMail,
	},
	{
		id: 2,
		name: "GitHub",
		href: `https://github.com/${profile.githubUsername}`,
		icon: FaGithub,
	},
	{
		id: 3,
		name: "X (Twitter)",
		href: `https://x.com/intent/follow?screen_name=${profile.twitterHandle}`,
		icon: FaXTwitter,
	},
	{
		id: 4,
		name: "LinkedIn",
		href: `https://www.linkedin.com/in/${profile.linkedinSlug}`,
		icon: FaLinkedinIn,
	},
];

export const hireText =
	"I'm open to software engineering roles and freelance work where I can build reliable backend systems, developer tools, and performance-critical products.";

interface SupportLink {
	id: number;
	label: string;
	href: string;
	icon: IconComponent;
}

export interface CryptoDonationOption {
	id: number;
	name: string;
	shortName: string;
	address: string;
	icon: IconComponent;
}

export const supportText =
	"If my open-source work, tools, or technical writing helps you, consider supporting me. It helps me keep building and sharing useful developer tools.";

export const supportMethods: SupportLink[] = [
	{
		id: 1,
		label: "GitHub Sponsors",
		href: `https://github.com/sponsors/${profile.support.githubSponsorsUsername}`,
		icon: FaRegHeart,
	},
	{
		id: 2,
		label: "Buy Me a Coffee",
		href: `https://buymeacoffee.com/${profile.support.buyMeACoffeeUsername}`,
		icon: SiBuymeacoffee,
	},
];

export const cryptoDonationOptions: CryptoDonationOption[] = [
	{
		id: 1,
		name: "Bitcoin",
		shortName: "BTC",
		address: profile.support.bitcoinAddress,
		icon: SiBitcoin,
	},
	{
		id: 2,
		name: "Ethereum",
		shortName: "ETH",
		address: profile.support.ethereumAddress,
		icon: SiEthereum,
	},
	{
		id: 3,
		name: "Solana",
		shortName: "SOL",
		address: profile.support.solanaAddress,
		icon: SiSolana,
	},
];
