import React, { useState } from 'react';

type Props = {
	onSearch: (query: string) => void;
}

/**
 * Searchbar for users to input their search query.
 */
const SearchBar: React.FC<Props> = ({ onSearch }) => {
	// tracks current user search query
	const [query, setQuery] = useState("");
	const [previousQuery, setPreviousQuery] = useState("");

	// Handles the input change and sets the query state
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setQuery(value);
	}

	// Handles the key down event and triggers search on Enter key press
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		// only search on enter key and if query changed
		if (e.key === 'Enter' && query !== previousQuery) {
			onSearch(query);
			setPreviousQuery(query);
		}
	}

	return (
		<div className="mb-8">
			<h2 className="text-lg font-semibold mb-4">Search</h2>
			<input
				type="text"
				placeholder="Search themes..."
				value={query}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				className="w-full border rounded-md px-3 py-2"
			/>
		</div>
	)
}

export default SearchBar;
