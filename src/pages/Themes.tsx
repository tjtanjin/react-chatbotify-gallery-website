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
import DesktopThemePreview from '../components/Themes/DesktopThemePreview';

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

	console.log(themes)
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

	// todo: show a proper error message if themes are not able to be fetched
	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="bg-accent-950 flex h-screen w-full">
			{/* Main Content Section */}
			<div className="overflow-y-scroll hide-scrollbar w-full flex flex-col">
				<div className="ml-14 mt-6 text-accent-50">
					{/* Headers */}
					<h1 className="text-2xl font-semibold pb-3">Select Theme(s)</h1>
					<h2 className="text-accent-300 text-sm mb-2">
						You can select multiple themes and combine them however you like.
					</h2>
					{/* TODO: this will be a button that opens a modal or redirects */}
					<h2 className="text-blue-500 text-sm">How choosing multiple themes work (i)</h2>
					<div className="mt-4">
						<SearchBar onSearch={handleSearch} /></div>
				</div>
				<div className="flex flex-col md:grid md:grid-cols-[repeat(auto-fill,270px)] justify-center">
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
			{/* Drawer Section */}
			<DesktopThemePreview
				setPreviewIds={setPreviewIds}
				previewIds={previewIds}
				clearPreviewIds={clearPreviewIds}
			/>
		</div>
	);
};

export default Themes;
