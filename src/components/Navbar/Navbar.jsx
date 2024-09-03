import { useState } from "react";

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<nav className="flex justify-between items-center px-8 py-6 md:py-0 md:px-0 lg:pt-10">
			<div className="md:py-6 md:px-8 lg:pl-16 lg:flex lg:gap-16 lg:w-full lg:pr-0 items-center">
				<a href="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="48"
						height="48"
						className="shrink-0 hover:cursor-pointer"
					>
						<g
							fill="none"
							fillRule="evenodd"
						>
							<circle
								cx="24"
								cy="24"
								r="24"
								fill="#FFF"
							/>
							<path
								fill="#0B0D17"
								d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
							/>
						</g>
					</svg>
				</a>
				<div className="hidden lg:block h-[1px] w-full bg-[#979797] lg:mr-[-32px] opacity-25 z-20"></div>
			</div>
			<div className="hidden md:flex bg-white-100 backdrop-blur-lg relative z-0 md:pr-10 lg:pr-16 shrink-0 lg:w-[52%] pl-28 lg:pl-40">
				<ul className="flex relative z-10 opacity-100 text-white gap-12 [&>li]:py-10 [&_span]:font-bold [&_a]:uppercase [&_li]:border-b-2 [&_li]:transition-all [&_li]:duration-500 [&_li]:ease-in">
					<li
						className={`h-full ${
							window.location.pathname == "/"
								? "border-white"
								: "border-transparent hover:border-b-white-500"
						}`}
					>
						<a
							className={`preset-8`}
							href="/"
						>
							<span className="hidden lg:inline">00</span> Home
						</a>
					</li>
					<li
						className={`h-full ${
							window.location.pathname.includes("destination")
								? "border-white"
								: "border-transparent hover:border-b-white-500"
						}`}
					>
						<a
							href="/destination"
							className={`preset-8`}
						>
							<span>01</span> Destination
						</a>
					</li>
					<li
						className={`h-full ${
							window.location.pathname == "/crew"
								? "border-white"
								: "border-transparent hover:border-b-white-500"
						}`}
					>
						<a
							className="preset-8"
							href="/crew"
						>
							<span>02</span> Crew
						</a>
					</li>
					<li
						className={`h-full ${
							window.location.pathname == "/technology"
								? "border-white"
								: "border-transparent hover:border-b-white-500"
						}`}
					>
						<a
							className="preset-8"
							href="/technology"
						>
							<span>03</span> Technology
						</a>
					</li>
				</ul>
			</div>
			<div
				className="md:hidden"
				onClick={() => setShowMenu(!showMenu)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="21"
				>
					<g
						fill="#D0D6F9"
						fillRule="evenodd"
					>
						<path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
					</g>
				</svg>
			</div>
			{showMenu && (
				<div className="md:hidden absolute top-0 right-0 bg-translucent w-4/6 h-full flex flex-col z-20 backdrop-blur-lg pl-8">
					<div className="flex justify-end pr-6 py-8">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="21"
							onClick={() => setShowMenu(!showMenu)}
						>
							<g
								fill="#D0D6F9"
								fillRule="evenodd"
							>
								<path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
								<path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
							</g>
						</svg>
					</div>
					<ul>
						<ul className="flex flex-col relative z-10 opacity-100 text-white [&>li]:py-5 [&_span]:font-bold [&_a]:uppercase  [&_a]:block [&_a]:w-full [&_a]:border-r-4 mt-12">
							<li>
								<a
									className={`preset-8 ${
										window.location.pathname == "/"
											? "border-white"
											: "border-transparent hover:border-b-white-500"
									}`}
									href="/"
								>
									<span>00</span> Home
								</a>
							</li>
							<li
								className={`h-full ${
									window.location.pathname == "/destination"
										? "border-white"
										: "border-transparent hover:border-b-white-500"
								}`}
							>
								<a
									href="/destination"
									className={`preset-8 ${
										window.location.pathname == "/destination"
											? "border-white"
											: "border-transparent hover:border-b-white-500"
									}`}
								>
									<span>01</span> Destination
								</a>
							</li>
							<li
								className={`h-full ${
									window.location.pathname == "/crew"
										? "border-white"
										: "border-transparent hover:border-b-white-500"
								}`}
							>
								<a
									className={`preset-8 ${
										window.location.pathname == "/crew"
											? "border-white"
											: "border-transparent hover:border-b-white-500"
									}`}
									href="/crew"
								>
									<span>02</span> Crew
								</a>
							</li>
							<li
								className={`h-full ${
									window.location.pathname == "/technology"
										? "border-white"
										: "border-transparent hover:border-b-white-500"
								}`}
							>
								<a
									className={`preset-8 ${
										window.location.pathname == "/technology"
											? "border-white"
											: "border-transparent hover:border-b-white-500"
									}`}
									href="/technology"
								>
									<span>03</span> Technology
								</a>
							</li>
						</ul>
					</ul>
				</div>
			)}
		</nav>
	);
}
