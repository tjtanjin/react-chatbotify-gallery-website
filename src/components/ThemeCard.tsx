import React from 'react';
import { Theme } from '../interfaces/Theme';

interface Props {
	theme: Theme;
}

const ThemeCard: React.FC<Props> = ({ theme }) => {
	return (
		<div className="bg-white rounded-lg shadow-md">
			<img src={theme.themeImg} alt={theme.title} className="w-full h-64 object-cover rounded-t-lg" />
			<div className="p-4">
				<h3 className="text-xl font-semibold mb-2">{theme.title}</h3>
				<p className="text-gray-600">{theme.description}</p>
				<div className="flex items-center mt-4">
					<img src={theme.authorImg} alt={theme.authorName} className="w-10 h-10 rounded-full mr-2" />
					<p className="text-gray-700">{theme.authorName}</p>
				</div>
			</div>
		</div>
	);
};

export default ThemeCard;