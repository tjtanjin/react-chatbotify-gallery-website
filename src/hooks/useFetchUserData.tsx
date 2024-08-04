import { useEffect, useRef, useState } from "react";

import { UserData } from "../interfaces/UserData";

/**
 * Fetches user data from the backend api.
 *
 * @param url url to fetch user data from
 * @param provider oauth login provider being used
 * @param uuid identifies the user uniquely
 */
const useFetchUserData = (url: string, provider: string, uuid: string) => {
	const [data, setData] = useState<UserData>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);
	const fetchInitiated = useRef<boolean>(false);

	useEffect(() => {
		// prevents duplicate fetching
		if (fetchInitiated.current) {
			return;
		}

		const fetchData = async () => {
			try {
				const response = await fetch(`${url}?provider=${provider}&uuid=${uuid}`);
				const result = await response.json();
				setData(result);
			} catch (err: unknown) {
				setError(err as Error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
		fetchInitiated.current = true;
	}, [url, provider, uuid]);

	return { data, loading, error };
};

export default useFetchUserData;