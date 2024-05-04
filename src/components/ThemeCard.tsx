import React from 'react';
import { Theme } from '../interfaces/Theme';

interface Props {
	theme: Theme;
}

const ThemeCard: React.FC<Props> = ({ theme }) => {
	return (
		<div className="bg-slate-50 dark:bg-slate-800 h-full rounded overflow-hidden">
			<div className="relative">
				<img src={theme.themeImg} className="w-full" alt={theme.name} />
			</div>
			<div className="p-4">
				<a href="#!">
					<p className="text-[15px] opacity-80 mb-2">{theme.name}</p>
				</a>
				<p className="text-[15px] opacity-80">{theme.description}</p>
				<div className="flex justify-between mt-4 mb-2">
					<div className="flex items-center">
						<div>
							<h4 className="text-base font-medium mb-0">{theme.authorName}</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThemeCard;