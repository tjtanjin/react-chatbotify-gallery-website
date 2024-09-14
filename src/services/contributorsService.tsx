import { IContributor } from "../interfaces/About";

/**
 * Fetch github contributors data: 'login', 'avatar_url', 'html_url'
 *
 * @param repo repo name to fetch contributors from.
 */

const contributorsApiFetch = async (repo: string): Promise<IContributor[]> => {
	// TODO: Add logic to fetch contributors data based on "repo:string" param
	// ! NOTE: The following logic is a mocked promise
	// ! Should be removed and replaced once the API endpoint is ready to be consumed
	let data: IContributor[]
	if(repo === "react-chatbotify-gallery-website") {
		data = [
			{
				login: 'tjtanjin',
				avatar_url: 'https://avatars.githubusercontent.com/u/43908963?v=4',
				html_url: 'https://github.com/tjtanjin',
			},
			{
				login: 'adel_gu',
				avatar_url: 'https://avatars.githubusercontent.com/u/68030297?s=96&v=4',
				html_url: 'https://github.com/adel-gu',
			},
		];
	} else {
		data = [
			{
				login: 'tjtanjin',
				avatar_url: 'https://avatars.githubusercontent.com/u/43908963?v=4',
				html_url: 'https://github.com/tjtanjin',
			},
			{
				login: 'KaloniGiga',
				avatar_url: 'https://avatars.githubusercontent.com/u/120079191?v=4',
				html_url: 'https://github.com/KaloniGiga',
			},
		];
	}

	return new Promise((resolve) => setTimeout(() => resolve(data), 1000));
};

export {
	contributorsApiFetch
}
