import { useEffect, useState } from "react";

import { ApiTheme } from "../interfaces/ApiTheme";
import { getGitHubThemeData } from "../services/themeService";
import { Theme } from "../interfaces/Theme";

/**
 * Fetches themes from the backend api.
 *
 * @param url url to fetch themes from
 * @param pageSize number of themes to fetch each page
 * @param pageNum page number to fetch for
 * @param searchQuery search query for filtering themes
 */
const useFetchThemes = (
	url: string,
	pageSize: number,
	pageNum: number,
	searchQuery?: string
) => {
	const [themes, setThemes] = useState<Theme[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				let finalUrl = `${url}?pageSize=${pageSize}&pageNum=${pageNum}`;
				if (searchQuery) {
					finalUrl += `&searchQuery=${encodeURIComponent(searchQuery)}`;
				}

				const response = await fetch(finalUrl);
				const result = await response.json();
				const themes = await fetchThemesFromGitHub(result);
				setThemes(themes);
			} catch (err: unknown) {
				setError(err as Error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url, pageSize, pageNum, searchQuery]);

	return { themes, loading, error };
};

/**
 * Fetches themes information from github (or more accurately, jsdelivr cache).
 */
const fetchThemesFromGitHub = async (apiThemes: ApiTheme[]): Promise<Theme[]> => {
	// todo: good to cache themes already fetched to reduce calls to cdn
	return await Promise.all(apiThemes.map(apiTheme => getGitHubThemeData(apiTheme)));
}

export default useFetchThemes;
