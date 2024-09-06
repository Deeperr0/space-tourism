import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Destination({ dataJson }) {
	const [currentDestination, setCurrentDestination] = useState(
		dataJson.destinations[0]
	);
	const [currentDestinationIndex, setCurrentDestinationIndex] = useState(0);
	useEffect(() => {
		document
			.getElementById("root")
			.classList.add(
				"bg-bgDestinationMobile",
				"md:bg-bgDestinationTablet",
				"lg:bg-bgDestinationDesktop",
				"bg-cover",
				"bg-no-repeat",
				"bg-center"
			);
		const element = document.getElementById("destination-image");
		element.classList.add("animate-slide-in-left");
		element.classList.remove("opacity-0");

		element.addEventListener(
			"animationend",
			() => {
				element.classList.remove("animate-slide-in-left");
			},
			{ once: true }
		);
	}, []);

	return (
		<div className="w-full">
			<Helmet>
				<title>Space Tourism | {currentDestination?.name.toUpperCase()}</title>
				<meta
					name="description"
					content="Pick your destination"
				/>
			</Helmet>
			<div className="flex flex-col items-center p-6 md:p-10 lg:px-40">
				<div className="flex flex-col items-center md:items-start w-full">
					<p className="number-text text-white gap-6 flex items-center">
						<span className="number-span">01</span>
						PICK YOUR DESTINATION
					</p>
				</div>
				<div className="lg:flex lg:flex-row gap-8 lg:my-32 justify-center">
					<div className="flex flex-col items-center">
						<div className="aspect-square w-40 md:w-80 lg:w-[480px] lg:px-7">
							<img
								id="destination-image"
								src={currentDestination?.images.webp}
								alt={currentDestination?.name}
								className="my-16 lg:m-0"
							/>
						</div>
					</div>
					<div className="px-12">
						<div>
							<ul className="flex gap-8 justify-center lg:justify-start">
								{dataJson.destinations.map((destination, index) => (
									<li
										key={index}
										className={`preset-8 text-blue-300 pb-4 ${
											currentDestination?.name.toLowerCase() ==
											destination?.name.toLowerCase()
												? "border-white"
												: "border-transparent hover:border-b-white-500 transition-all duration-500"
										} border-b-2 uppercase`}
										onClick={() => {
											let animation = "";
											if (index > currentDestinationIndex) {
												animation = "animate-slide-in-right";
											} else if (index < currentDestinationIndex) {
												animation = "animate-slide-in-left";
											}
											setCurrentDestination(destination);
											setCurrentDestinationIndex(index);
											const element =
												document.getElementById("destination-image");
											element.classList.add(animation);
											element.classList.remove("opacity-0");

											element.addEventListener(
												"animationend",
												() => {
													element.classList.remove(animation);
												},
												{ once: true }
											);
										}}
									>
										<p className="hover:cursor-pointer">{destination?.name}</p>
									</li>
								))}
							</ul>
						</div>
						<h1 className="preset-2 uppercase text-white mt-6 text-center lg:text-left">
							{currentDestination?.name}
						</h1>
						<p className="preset-9 text-blue-300 text-center md:px-20 lg:px-0 lg:text-left">
							{currentDestination?.description}
						</p>
						<hr className="w-full opacity-25 bg-[#979797] my-6"></hr>
						<div className="text-center flex flex-col items-center gap-6 md:gap-0 md:flex-row md:justify-between md:w-full">
							<div className="w-1/2">
								<p className="preset-7 text-blue-300">AVG. DISTANCE</p>
								<p className="uppercase preset-6 text-white">
									{currentDestination?.distance}
								</p>
							</div>
							<div className="w-1/2">
								<p className="preset-7 text-blue-300">EST. TRAVEL TIME</p>
								<p className="uppercase preset-6 text-white">
									{currentDestination?.travel}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Destination.propTypes = {
	dataJson: PropTypes.object,
};
