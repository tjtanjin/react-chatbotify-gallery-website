import React, { useState } from 'react';

type Props = {
	onSearch: (query: string) => void
}

/**
 * Searchbar for users to input their search query.
 */
const SearchBar: React.FC<Props> = ({ onSearch }) => {
	// tracks current user search query
	const [query, setQuery] = useState('')

	// todo: perhaps only search when enter is pressed while search is focused
	// to reduce the api calls to backend incurred from every change
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setQuery(value)
		onSearch(value)
	}

	return (
		<div className="mb-8">
			<h2 className="text-lg font-semibold mb-4">Search</h2>
			<input
				type="text"
				placeholder="Search themes..."
				value={query}
				onChange={handleChange}
				className="w-full border rounded-md px-3 py-2"
			/>
		</div>
	)
}

export default SearchBar
