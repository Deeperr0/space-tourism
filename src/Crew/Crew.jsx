import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Crew({ dataJson }) {
	const [currentCrewMember, setCurrentCrewMember] = useState(dataJson.crew[0]);
	useEffect(() => {
		document
			.getElementById("root")
			.classList.add(
				"bg-bgCrewMobile",
				"md:bg-bgCrewTablet",
				"lg:bg-bgCrewDesktop",
				"bg-cover",
				"bg-no-repeat",
				"bg-center"
			);
		const element = document.getElementById("crew-image");
		element.classList.add("animate-slide-in-right");
		element.classList.remove("opacity-0");

		element.addEventListener(
			"animationend",
			() => {
				element.classList.remove("animate-slide-in-right");
			},
			{ once: true }
		);

		// Scroll event listener
		const scrollContainer = document.getElementById("crew-scroll-container");
		let lastScrollLeft = scrollContainer.scrollLeft;

		const handleScroll = () => {
			const newScrollLeft = scrollContainer.scrollLeft;
			if (newScrollLeft > lastScrollLeft) {
				// Scrolling to the right
				const nextIndex = Math.min(
					dataJson.crew.indexOf(currentCrewMember) + 1,
					dataJson.crew.length - 1
				);
				setCurrentCrewMember(dataJson.crew[nextIndex]);
			} else if (newScrollLeft < lastScrollLeft) {
				// Scrolling to the left
				const prevIndex = Math.max(
					dataJson.crew.indexOf(currentCrewMember) - 1,
					0
				);
				setCurrentCrewMember(dataJson.crew[prevIndex]);
			}
			lastScrollLeft = newScrollLeft;
		};
		scrollContainer.addEventListener("scroll", handleScroll);

		return () => {
			scrollContainer.removeEventListener("scroll", handleScroll);
		};
	}, [currentCrewMember, dataJson.crew]);

	return (
		<div className="w-full h-full">
			<Helmet>
				<title>Space Tourism | MEET YOUR CREW</title>
				<meta
					name="description"
					content="meet your crew"
				/>
			</Helmet>
			<div className="flex flex-col items-center p-6 md:p-10 md:pb-0 lg:px-40 justify-between">
				<div className="flex flex-col items-center md:items-start w-full">
					<p className="number-text text-white gap-6 flex items-center">
						<span className="number-span">02</span>
						MEET YOUR CREW
					</p>
				</div>
				<div className="flex flex-col my-16 lg:flex-row gap-8 lg:gap-8 lg:my-12 lg:justify-center items-center md:mb-0">
					<div className="flex flex-col gap-8 items-center lg:items-start lg:justify-between">
						<div className="flex flex-col items-center lg:items-start lg:py-36 md:px-20 lg:px-0">
							<p className="preset-4 opacity-50 uppercase text-white">
								{currentCrewMember?.role}
							</p>
							<h1 className="preset-3 uppercase text-white mt-2 md:mt-4 text-center lg:text-left">
								{currentCrewMember?.name}
							</h1>
							<p className="preset-9 text-blue-300 text-center lg:text-left mt-6">
								{currentCrewMember?.bio}
							</p>
						</div>
						<div
							className="flex items-center gap-4"
							id="crew-scroll-container"
						>
							{dataJson.crew.map((crewMember, index) => (
								<div
									key={index}
									onClick={() => {
										setCurrentCrewMember(crewMember);
										const element = document.getElementById("crew-image");
										element.classList.add("animate-slide-in-right");
										element.classList.remove("opacity-0");

										element.addEventListener(
											"animationend",
											() => {
												element.classList.remove("animate-slide-in-right");
											},
											{ once: true }
										);
									}}
									className={`rounded-full aspect-square w-[10px] lg:w-[15px] transition-all duration-500 ease-in hover:bg-white-500 hover:cursor-pointer ${
										currentCrewMember === crewMember
											? "bg-white"
											: "bg-white/15"
									}`}
								></div>
							))}
						</div>
					</div>
					<div className="px-7 lg:w-[48%] shrink-0">
						<img
							id="crew-image"
							src={currentCrewMember?.images?.webp}
							alt={currentCrewMember?.name}
							className="lg:relative md:absolute md:bottom-0 md:right-0 my-16 md:m-0 lg:m-0 foreground-image md:px-40 lg:px-0 md:h-[45%] md:object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

Crew.propTypes = {
	dataJson: PropTypes.object,
};
