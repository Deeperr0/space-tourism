import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export default function Technology({ dataJson }) {
	const [currentTechnology, setCurrentTechnology] = useState(
		dataJson.technology[0]
	);
	const [currentTechnologyIndex, setCurrentTechnologyIndex] = useState(0);
	useEffect(() => {
		document
			.getElementById("root")
			.classList.add(
				"bg-bgTechnologyMobile",
				"md:bg-bgTechnologyTablet",
				"lg:bg-bgTechnologyDesktop",
				"bg-cover",
				"bg-no-repeat",
				"bg-center"
			);
		const element = document.getElementById("technology-image-landscape");
		element.classList.add("animate-slide-in-right");
		element.classList.remove("opacity-0");

		element.addEventListener(
			"animationend",
			() => {
				element.classList.remove("animate-slide-in-right");
			},
			{ once: true }
		);
		const elementPortrait = document.getElementById(
			"technology-image-portrait"
		);
		elementPortrait.classList.add("animate-slide-in-up");
		elementPortrait.classList.remove("opacity-0");

		elementPortrait.addEventListener(
			"animationend",
			() => {
				elementPortrait.classList.remove("animate-slide-in-up");
			},
			{ once: true }
		);
	}, []);

	return (
		<div className="w-full">
			<Helmet>
				<title>Space Tourism | Technologies</title>
				<meta
					name="description"
					content="Lets take a look at the technologies used in space. We have a lot of different technologies in space. Let's see what you can do with them!"
				/>
			</Helmet>
			<div className="text-white flex flex-col items-center pt-6 md:pt-10 w-full lg:pl-[11.5%]">
				<div className="flex items-start w-full pl-10">
					<p className="number-text text-white gap-6 flex items-center">
						<span className="number-span">03</span> SPACE LAUNCH 101
					</p>
				</div>
				<div className="lg:flex lg:flex-row-reverse">
					<div>
						<img
							id="technology-image-landscape"
							src={currentTechnology.images.landscape}
							className="mt-24 h-64 object-cover w-full lg:hidden md:h-[357px]"
							alt={currentTechnology.name}
						/>
						<img
							id="technology-image-portrait"
							src={currentTechnology.images.portrait}
							className="hidden mt-24 h-64 object-cover lg:block shrink-0 md:h-[600px] aspect-square w-[600px] pb-[115px]"
							alt={currentTechnology.name}
						/>
					</div>
					<div className="flex flex-col lg:flex-row lg:gap-16 lg:mr-8">
						<div className="flex gap-4 justify-center py-8 [&>div]:cursor-pointer lg:flex-col">
							<div
								className={`border border-white-250 hover:border-white transition-all duration-300 preset-4 aspect-square w-10 md:w-14 lg:w-20 rounded-full flex justify-center items-center ${
									currentTechnologyIndex === 0 ? "bg-white text-blue-900" : ""
								}`}
								onClick={() => {
									setCurrentTechnologyIndex(0);
									setCurrentTechnology(dataJson.technology[0]);
									const element = document.getElementById(
										"technology-image-landscape"
									);
									element.classList.add("animate-slide-in-left");
									element.classList.remove("opacity-0");

									element.addEventListener(
										"animationend",
										() => {
											element.classList.remove("animate-slide-in-left");
										},
										{ once: true }
									);
									const elementPortrait = document.getElementById(
										"technology-image-portrait"
									);
									elementPortrait.classList.add("animate-slide-in-down");
									elementPortrait.classList.remove("opacity-0");

									elementPortrait.addEventListener(
										"animationend",
										() => {
											elementPortrait.classList.remove("animate-slide-in-down");
										},
										{ once: true }
									);
								}}
							>
								1
							</div>
							<div
								className={`border border-white-250 hover:border-white transition-all duration-300 preset-4 aspect-square w-10 md:w-14 lg:w-20 rounded-full flex justify-center items-center ${
									currentTechnologyIndex === 1 ? "bg-white text-blue-900" : ""
								}`}
								onClick={() => {
									let animation = "";
									let animationPortrait = "";
									if (currentTechnologyIndex < 1) {
										animation = "animate-slide-in-right";
										animationPortrait = "animate-slide-in-up";
									} else {
										animation = "animate-slide-in-left";
										animationPortrait = "animate-slide-in-down";
									}
									setCurrentTechnologyIndex(1);
									setCurrentTechnology(dataJson.technology[1]);
									const element = document.getElementById(
										"technology-image-landscape"
									);
									element.classList.add(animation);
									element.classList.remove("opacity-0");

									element.addEventListener(
										"animationend",
										() => {
											element.classList.remove(animation);
										},
										{ once: true }
									);
									const elementPortrait = document.getElementById(
										"technology-image-portrait"
									);
									elementPortrait.classList.add(animationPortrait);
									elementPortrait.classList.remove("opacity-0");

									elementPortrait.addEventListener(
										"animationend",
										() => {
											elementPortrait.classList.remove(animationPortrait);
										},
										{ once: true }
									);
								}}
							>
								2
							</div>
							<div
								className={`border border-white-250 hover:border-white transition-all duration-300 preset-4 aspect-square w-10 md:w-14 lg:w-20 rounded-full flex justify-center items-center ${
									currentTechnologyIndex === 2 ? "bg-white text-blue-900" : ""
								}`}
								onClick={() => {
									let animation = "";
									let animationPortrait = "";
									if (currentTechnologyIndex < 2) {
										animation = "animate-slide-in-right";
										animationPortrait = "animate-slide-in-up";
									} else {
										animation = "animate-slide-in-left";
										animationPortrait = "animate-slide-in-down";
									}
									setCurrentTechnologyIndex(2);
									setCurrentTechnology(dataJson.technology[2]);
									const element = document.getElementById(
										"technology-image-landscape"
									);
									element.classList.add(animation);
									element.classList.remove("opacity-0");

									element.addEventListener(
										"animationend",
										() => {
											element.classList.remove(animation);
										},
										{ once: true }
									);
									const elementPortrait = document.getElementById(
										"technology-image-portrait"
									);
									elementPortrait.classList.add(animationPortrait);
									elementPortrait.classList.remove("opacity-0");

									elementPortrait.addEventListener(
										"animationend",
										() => {
											elementPortrait.classList.remove(animationPortrait);
										},
										{ once: true }
									);
								}}
							>
								3
							</div>
						</div>
						<div className="flex flex-col items-center px-6 gap-4 pb-12 md:px-32 lg:px-0 lg:items-start lg:justify-center lg:w-[491px]">
							<p className="opacity-50 preset-4 uppercase">
								THE TERMINOLOGY...
							</p>
							<p className="preset-3 uppercase">{currentTechnology.name}</p>
							<p className="text-blue-300 text-center preset-9 lg:text-left">
								{currentTechnology.description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Technology.propTypes = {
	dataJson: PropTypes.object,
};
