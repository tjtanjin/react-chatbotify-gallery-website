import React, { useState } from "react";

import Skeleton from "react-loading-skeleton";

import { Theme } from "../../interfaces/Theme";

import "../../styles/theme_card.css";
import ThemeModal from "./ThemeModal";

type Props = {
  theme: Theme;
  isPreviewed: boolean;
  onPreview: (name: string) => void;
  isLoading: boolean;
};

/**
 * Theme card component to hold the details of each theme in the themes page.
 */
const ThemeCard: React.FC<Props> = ({ theme, isPreviewed, onPreview, isLoading }) => {
	const [viewDetails, setViewDetails] = useState(false);

	const onViewDetails = () => {
		setViewDetails(true);
	};

	const onClickPreview = () => {
		onPreview(theme.name);
	};

	const handleCheckboxChange = () => {
		onClickPreview();
	};

	if (isLoading) {
		return (
			<div>
				<div className="my-4 mx-2 hidden md:block">
					<Skeleton height={452} />
				</div>
				<div className="my-4 mx-2 block md:hidden">
					<Skeleton height={148} />
				</div>
			</div>
		);
	}

	return (
		<>
			<div
				className={`flex flex-row items-center md:items-start md:flex-col 
        md:w-64 p-4 my-4 mx-2 border-2 border-solid rounded-xl 
        ${isPreviewed ? "border-blue-700" : "border-accent-600"}`}
			>
				<div
					className="flex-1 basis-1/3 md:basis-1/2 mr-3 flex flex-row
        overflow-hidden w-32 h-20 md:w-56 md:h-56 rounded-xl"
				>
					<img src={theme.themeImg} alt={theme.name} className="w-60 h-60 object-cover object-left-top" />
				</div>
				<div className="flex-1 mr-4 basis-1/2 md:basis-1/3 flex flex-col md:pt-4">
					<h2 className="text-accent-50 text-lg font-medium mt-[-4px]">{theme.name}</h2>
					<span className="text-accent-300 text-sm">{theme.description}</span>
				</div>
				<div className="flex-1 basis-1/6 md:basis-1/6 flex flex-col">
					<button onClick={onViewDetails} className="text-blue-500 text-sm my-4 w-20">
						More Info (i)
					</button>
					<label className=" ml-[2px] text-accent-50 text-sm md:text-base">
						Select
						<input type="checkbox" checked={isPreviewed} onChange={handleCheckboxChange} className="ml-2" />
					</label>
				</div>
			</div>
			<ThemeModal isOpen={viewDetails} theme={theme} onClose={() => setViewDetails(false)} />
		</>
	);
};

export default ThemeCard;
