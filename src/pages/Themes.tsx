import React, { useState, useEffect } from 'react';
import ThemeCard from '../components/ThemeCard';
import Filters from '../components/Filters';
import SearchBar from '../components/SearchBar';
import { fetchThemes } from '../services/apiService';
import { Theme } from '../interfaces/Theme';
import { useAuth } from '../context/AuthContext';

const ThemesPage: React.FC = () => {
	const [themes, setThemes] = useState<Theme[]>([]);

	const fetchThemesData = async () => {
		try {
			// todo: add loading spinner while fetching themes
			const data = fetchThemes();
			setThemes(data);
		} catch (error) {
			// todo: add display error message
		}
	};

	useEffect(() => {
		fetchThemesData();
	}, []);

	const handleSearch = (query: string) => {
		const filtered = themes.filter(theme =>
			theme.title.toLowerCase().includes(query.toLowerCase()) ||
			theme.description.toLowerCase().includes(query.toLowerCase())
		);
		setThemes(filtered);
	};

	return (
		<div className="flex">
			<div className="w-3/4 p-8">
				<div className="grid grid-cols-3 gap-4">
					{themes.map(theme => (
						<ThemeCard key={theme.id} theme={theme} />
					))}
				</div>
			</div>
			<div className="w-1/4 p-8">
				<Filters />
				<SearchBar onSearch={handleSearch} />
			</div>
		</div>
	);
};

export default ThemesPage;