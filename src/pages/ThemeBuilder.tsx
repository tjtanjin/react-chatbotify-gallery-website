import React from 'react';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
/**
 * Supports building and optionally sharing of themes directly on the website.
 */
const ThemeBuilder: React.FC = () => {
	// todo: add theme builder
	console.log('test')

  const {t} = useTranslation();

	return (
		<div className="flex items-center justify-center h-screen bg-black">
			<div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-screen-md">
				<h1 className="text-4xl font-bold mb-4 text-gray-800">{t('tbuilder.hdline')}</h1>
				<p className="text-lg text-gray-600 mb-8">
        {t('tbuilder.desc')}
				</p>
				<p className="text-md text-gray-500 mb-4">
        {t('tbuilder.smsg')}
				</p>
				<Link
					to="/themes"
					className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg
						hover:bg-blue-600 transition duration-300"
				>
					{t('tbuilder.btn')}
				</Link>
			</div>
		</div>
	)
}

export default ThemeBuilder
