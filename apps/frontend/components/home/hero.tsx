import React from 'react';
import Link from 'next/link';
import BackgroundContainer from '@/components/common/background-container';
import GitHubStarBadge from '@/components/common/github-star-badge';

export default function Hero() {
	return (
		<BackgroundContainer>
			<div className="relative mb-4 h-[30vh] w-full ">
				<div className="flex items-center justify-center mb-20">
					<GitHubStarBadge />
				</div>

				<h1 className="text-center text-8xl font-semibold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.500),theme(colors.pink.400),theme(colors.indigo.600),theme(colors.violet.400),theme(colors.fuchsia.500),theme(colors.purple.400),theme(colors.purple.500))] bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
					CareerBoost AI
				</h1>
			</div>
			<p className="mb-12 --font-space-grotesk text-center text-lg bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-600 bg-clip-text text-transparent md:text-xl">
				Transform your resume with AI-powered insights and land your dream job faster.
			</p>
			<Link
				href="/resume"
				className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px]"
			>
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7_0%,#ec4899_50%,#a855f7_100%)]" />
				<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-base font-medium text-gray-100 backdrop-blur-3xl transition-all duration-200 group-hover:bg-slate-900">
					Get Started Now
					<svg
						width="16"
						height="16"
						viewBox="0 0 0.3 0.3"
						fill="#FFF"
						xmlns="http://www.w3.org/2000/svg"
						className="ml-2 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
					>
						<path d="M.166.046a.02.02 0 0 1 .028 0l.09.09a.02.02 0 0 1 0 .028l-.09.09A.02.02 0 0 1 .166.226L.22.17H.03a.02.02 0 0 1 0-.04h.19L.166.074a.02.02 0 0 1 0-.028" />
					</svg>
				</span>
			</Link>
		</BackgroundContainer>
	);
}
