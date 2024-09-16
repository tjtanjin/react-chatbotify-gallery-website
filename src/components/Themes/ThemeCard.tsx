import React, { useState } from 'react';

import { Theme } from '../../interfaces/Theme';

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
	const onClickPreview = () => {
		onPreview(theme.name);
	};

	const handleCheckboxChange = () => {
		onClickPreview();
	};

	return (
		<div className={`flex flex-row md:flex-col md:w-64 p-4 my-4 mx-2 border-2 border-solid rounded-xl ${isPreviewed ? 'border-blue-700' : 'border-accent-600'}`}>
			<div className="flex-1 basis-1/5 md:basis-1/2 mr-3 flex flex-row overflow-hidden w-32 h-20 md:w-56 md:h-56 rounded-xl">
				<img
					src={theme.themeImg}
					alt={theme.name}
					className="w-60 h-60 object-cover object-left-top"
				/>
			</div>
			<div className="flex-1 mr-4 basis-3/5 md:basis-1/3 flex flex-col pt-4">
				<h2 className="text-accent-50 text-lg font-medium">{theme.name}</h2>
				<span className="text-accent-300 text-sm">{theme.description}</span>
			</div>
			<div className="flex-1 basis-1/5 md:basis-1/6 flex flex-col">
        <span className="text-blue-500 text-sm my-4">More Info (i)</span>
				<label className="text-accent-50">
					Select
					<input
						type="checkbox"
						checked={isPreviewed}
						onChange={handleCheckboxChange}
						className="ml-2"
					/>
				</label>
			</div>
		</div>
	);
};

export default ThemeCard;
