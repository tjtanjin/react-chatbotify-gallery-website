import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import ThemeModal from './ThemeModal';
import { Theme } from '../../interfaces/Theme';
import FavIcon from '../../assets/images/icon_favorite.svg';
import GitHubIcon from '../../assets/images/icon_github_white.svg';

import '../../styles/theme_card.css';

type Props = {
  theme: Theme;
  isPreviewed: boolean;
  onPreview: (name: string) => void;
};

/**
 * Theme card component to hold the details of each theme in the themes page.
 */
const ThemeCard: React.FC<Props> = ({ theme, isPreviewed, onPreview }) => {
	const [isFav, setIsFav] = useState(false);
	const [viewDetails, setViewDetails] = useState(false);

	const onViewDetails = () => {
		setViewDetails(true);
	};

	const onClickPreview = () => {
		onPreview(theme.name);
	};

	const [isCardSelected, setIsCardSelected] = useState(false);

	const handleCheckboxChange = () => {
		setIsCardSelected(!isCardSelected);
	};

	return (
		<div className={`flex flex-row p-4 my-4 mx-2 border-2 rounded-xl ${isCardSelected ? 'border-blue-700' : 'border-accent-600'}`}>
			<div className="flex-1 basis-1/5 mr-3 flex flex-row overflow-hidden w-32 h-20 rounded-xl">
				<img
					src={theme.themeImg}
					alt={theme.name}
					className="w-60 h-60 object-cover object-left-top"
				/>
			</div>
			<div className="flex-1 mr-4 basis-3/5 flex flex-col justify-center">
				<h2 className="text-accent-50">{theme.name}</h2>
				<span className="text-accent-300">{theme.description}</span>
				<span className="text-blue-500">More Info (i)</span>
			</div>
			<div className="flex-1 basis-1/5 flex items-center">
				<label className="text-accent-50">
					Select
					<input
						type="checkbox"
						checked={isCardSelected}
						onChange={handleCheckboxChange}
						className="ml-2"
					/>
				</label>
			</div>
		</div>
	);
};

export default ThemeCard;
