import React, { useState } from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ChatBot, { Params } from 'react-chatbotify';

import ThemeCard from '../components/Themes/ThemeCard';
import SearchBar from '../components/SearchBar/SearchBar';
import useFetchData from '../hooks/useFetchThemes';
import { Theme } from '../interfaces/Theme';
import { Endpoints } from '../constants/Endpoints';
import { useSearchParams } from 'react-router-dom';

/**
 * Displays themes for users to search, browse and rate.
 * // todo: dynamically load themes as user scrolls instead of fetching wholesale from backend
 */
const Themes: React.FC = () => {
	//search param hook to access URL
	const [searchParams, setSearchParams] = useSearchParams();

	// search query for filtering themes to show
	const [searchQuery, setSearchQuery] = useState(
		() => searchParams.get('searchQuery') || ''
	);

	// id of themes being selected to be preview (and applied to the interactive chatbot)
	const [previewIds, setPreviewIds] = useState<string[]>([]);

	// theme data fetched from backend

	const { themes, loading, error } = useFetchData(
		Endpoints.fetchApiThemes,
		30,
		1,
		searchQuery
	);
	/**
   * Handles setting of search query when user hits enter.
   *
   * @param query query user inputted
   */
	const handleSearch = (query: string) => {
		if (query === '') {
			searchParams.delete('searchQuery');
		} else {
			searchParams.set('searchQuery', query);
		}
		setSearchParams(searchParams);
		setSearchQuery(query);
	};

	/**
   * Handles setting and unsetting of theme ids to preview.
   *
   * @param id id of theme to set or unset
   */
	const onPreview = (id: string) => {
		setPreviewIds((prevPreviewId) =>
			prevPreviewId.includes(id)
				? prevPreviewId.filter((item) => item !== id)
				: [...prevPreviewId, id]
		);
	};

	/**
   * Clears all preview ids.
   */
	const clearPreviewIds = () => {
		setPreviewIds([]);
	};

	// flow for interactive chatbot
	const flow = {
		start: {
			message: (params: Params) => {
				params.injectMessage(
					'Hello 👋! Did you know? The order of specifying themes matters!'
				);
				return 'Try previewing some themes below, or click on those on the left! 😊';
			},
			checkboxes: { items: ['Minimal Midnight', 'Cyborg', 'Terminal'] },
			function: (params: Params) => {
				setPreviewIds(
					params.userInput.split(',').map((theme) => {
						if (theme === 'Minimal Midnight') {
							return 'minimal_midnight';
						} else if (theme === 'Cyborg') {
							return 'cyborg';
						} else {
							return 'terminal';
						}
					})
				);
			},
			chatDisabled: true,
			path: 'end',
		},
		end: {
			message: "What's next? 😊",
			options: ['Try Again', 'Check Documentation', 'Discord'],
			path: (params: Params) => {
				if (params.userInput === 'Try Again') {
					setPreviewIds([]);
				} else if (params.userInput === 'Discord') {
					window.open('https://discord.gg/6R4DK4G5Zh');
				} else if (params.userInput === 'Check Documentation') {
					window.open('https://react-chatbotify.com');
				} else {
					setPreviewIds([]);
					params.injectMessage(
						"Hmmm I'm not sure what you said, but let's try again!"
					);
				}
				return 'start';
			},
		},
	};

	// todo: show a proper error message if themes are not able to be fetched
	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="bg-accent-950 flex h-screen w-full">
			{/* Main Content Section */}
			<div className="mt-20 overflow-y-scroll hide-scrollbar w-full">
				<div className="text-accent-50">
					{/* Headers */}
					<h1>Select Theme(s)</h1>
					<h2>
						You can select multiple themes and combine them however you like.
					</h2>
					<h2>How choosing multiple themes work (i)</h2>
				</div>
				<div className="w-full flex flex-col md:flex-row md:flex-wrap">
					{/* Card Content */}
					{themes.map((theme) => {
						return (
							<ThemeCard
								key={theme.id}
								theme={theme}
								isPreviewed={previewIds.includes(theme.id)}
								onPreview={() => onPreview(theme.id)}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Themes;
