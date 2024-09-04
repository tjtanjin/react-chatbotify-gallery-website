import { useEffect, useState } from "react";
import { contributorsApiFetch } from "../services/contributorsService";
import { IContributor } from "../interfaces/About";

/**
 * Fetches contributors data.
 *
 * @param repo repo name to fetch contributors from.
 */

const useFetchContributorsAvatars = (repo:string) => {
	const [contributors, setContributors] = useState<IContributor[]>([]);
	const [total, setTotal] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchContributors = async () => {
			try {
				const contributorsData = await contributorsApiFetch(repo);
				const formattedContributors = contributorsData.map((contributor: IContributor) => ({
					avatar_url: contributor.avatar_url,
					login: contributor.login,
					html_url: contributor.html_url,
				}));
				setContributors(formattedContributors);
				setTotal(formattedContributors.length)
			} catch (err) {
				setError(err as Error);
			} finally {
				setLoading(false);
			}
		};

		fetchContributors();
	}, []);

	return { contributors, total, loading, error };
}

export default useFetchContributorsAvatars