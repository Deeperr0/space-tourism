import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loading from "../components/Loading";

export default function Crew({ dataJson }) {
	const [currentCrewMember, setCurrentCrewMember] = useState(dataJson.crew[0]);
	const [currentCrewMemberIndex, setCurrentCrewMemberIndex] = useState(0);
	const [imagesLoaded, setImagesLoaded] = useState(false);
	useEffect(() => {
		// Preload all images
		const preloadImages = async () => {
			const imagePromises = dataJson.crew.map((crewMember) => {
				return new Promise((resolve, reject) => {
					const img = new Image();
					img.src = crewMember.images.webp;
					img.onload = resolve;
					img.onerror = reject;
				});
			});

			try {
				await Promise.all(imagePromises);
				setImagesLoaded(true); // Mark images as loaded once all are preloaded
			} catch (error) {
				console.error("Error loading images", error);
			}
		};

		preloadImages();

		// Add background classes
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
	}, [dataJson.destinations]);
	useEffect(() => {
		// Scroll event listener
		const scrollContainer = document.getElementById("crew-scroll-container");
		let startX = 0;
		let threshold = 100; // Minimum swipe distance to change the crew member
		let isSwiping = false;

		const handleTouchStart = (e) => {
			startX = e.touches[0].clientX;
			isSwiping = true;
		};

		const handleTouchMove = (e) => {
			if (!isSwiping) return;

			let touchX = e.touches[0].clientX;
			let moveDistance = touchX - startX;

			if (moveDistance < -threshold) {
				// Swiped right
				if (currentCrewMemberIndex === dataJson.crew.length - 1) return;
				const nextIndex = Math.min(
					dataJson.crew.indexOf(currentCrewMember) + 1,
					dataJson.crew.length - 1
				);
				setCurrentCrewMember(dataJson.crew[nextIndex]);
				setCurrentCrewMemberIndex(nextIndex);
				// Animation handling
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
				isSwiping = false; // Prevent multiple updates in one swipe
			} else if (moveDistance > threshold) {
				// Swiped left
				if (currentCrewMemberIndex === 0) return;
				const prevIndex = Math.max(
					dataJson.crew.indexOf(currentCrewMember) - 1,
					0
				);
				setCurrentCrewMember(dataJson.crew[prevIndex]);
				setCurrentCrewMemberIndex(prevIndex);
				isSwiping = false; // Prevent multiple updates in one swipe
				// Animation handling
				const element = document.getElementById("crew-image");
				element.classList.add("animate-slide-in-left");
				element.classList.remove("opacity-0");

				element.addEventListener(
					"animationend",
					() => {
						element.classList.remove("animate-slide-in-left");
					},
					{ once: true }
				);
			}
		};

		const handleTouchEnd = () => {
			isSwiping = false;
		};
		if (!scrollContainer) return;
		scrollContainer.addEventListener("touchstart", handleTouchStart);
		scrollContainer.addEventListener("touchmove", handleTouchMove);
		scrollContainer.addEventListener("touchend", handleTouchEnd);

		return () => {
			// Clean up event listeners
			scrollContainer.removeEventListener("touchstart", handleTouchStart);
			scrollContainer.removeEventListener("touchmove", handleTouchMove);
			scrollContainer.removeEventListener("touchend", handleTouchEnd);
		};
	}, [currentCrewMember, dataJson.crew, imagesLoaded]);

	useEffect(() => {
		// Animation handling

		const element = document.getElementById("crew-image");
		if (element) {
			element.classList.add("animate-slide-in-right");
			element.classList.remove("opacity-0");

			element.addEventListener(
				"animationend",
				() => {
					element.classList.remove("animate-slide-in-right");
				},
				{ once: true }
			);
		}
	}, []);

	return (
		<div className="w-full h-full">
			<Helmet>
				<title>Space Tourism | MEET YOUR CREW</title>
				<meta
					name="description"
					content="meet your crew"
				/>
			</Helmet>
			{!imagesLoaded ? (
				<Loading />
			) : (
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
							<div className="flex items-center gap-4">
								{dataJson.crew.map((crewMember, index) => (
									<div
										key={index}
										onClick={() => {
											let animation = "";
											if (index > currentCrewMemberIndex) {
												animation = "animate-slide-in-right";
											} else {
												animation = "animate-slide-in-left";
											}
											setCurrentCrewMember(crewMember);
											setCurrentCrewMemberIndex(index);
											const element = document.getElementById("crew-image");
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
										className={`rounded-full aspect-square w-[10px] lg:w-[15px] transition-all duration-500 ease-in hover:bg-white-500 hover:cursor-pointer ${
											currentCrewMember === crewMember
												? "bg-white"
												: "bg-white/15"
										}`}
									></div>
								))}
							</div>
						</div>
						<div
							id="crew-scroll-container"
							className="lg:w-full"
						>
							<div className="px-7 shrink-0 overflow-hidden">
								<img
									id="crew-image"
									src={currentCrewMember?.images?.webp}
									alt={currentCrewMember?.name}
									className="lg:relative md:absolute md:bottom-0 md:right-0 my-16 md:m-0 lg:m-0 foreground-image md:px-40 lg:px-0 md:h-[45%] lg:h-full md:object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

Crew.propTypes = {
	dataJson: PropTypes.object,
};
