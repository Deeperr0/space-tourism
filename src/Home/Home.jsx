import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
export default function Home() {
	useEffect(() => {
		document
			.getElementById("root")
			.classList.add(
				"bg-bgHomeMobile",
				"md:bg-bgHomeTablet",
				"lg:bg-bgHomeDesktop",
				"bg-cover",
				"bg-no-repeat",
				"bg-center"
			);
	}, []);
	return (
		<div className="w-full">
			<Helmet>
				<title>Space Tourism | Homepage</title>
				<meta
					name="description"
					content="Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!"
				/>
			</Helmet>
			<div className="w-full">
				<div className="pt-6 lg:flex px-[12%] lg:gap-72 lg:pt-[10%] lg:pb-32">
					<div className="text-white flex flex-col items-center justify-center px-6 md:px-24 md:mx-10 mt-6 lg:items-start lg:p-0 lg:m-0">
						<h1 className="preset-6 flex flex-col items-center text-center text-blue-300">
							SO, YOU WANT TO TRAVEL TO
							<span className="block preset-1 text-white animate-slide-in-left">
								SPACE
							</span>
						</h1>
						<p className="preset-9 text-center lg:text-left text-blue-300">
							Let&apos;s face it; if you want to go to space, you might as well
							genuinely go to outer space and not hover kind of on the edge of
							it. Well sit back, and relax because we&apos;ll give you a truly
							out of this world experience!
						</p>
					</div>
					<div className="flex justify-center items-center py-[120px]">
						<button
							className="rounded-full aspect-square w-36 md:w-64 bg-white preset-4 hover:shadow-custom uppercase transition-shadow duration-300 text-blue-900"
							onClick={() => (window.location.href = "/destination")}
							style={{ cursor: "pointer" }}
						>
							Explore
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
