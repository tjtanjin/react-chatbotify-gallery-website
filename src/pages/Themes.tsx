import React, { useCallback, useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ChatBot, { Params } from 'react-chatbotify'
import ThemeCard from '../components/Themes/ThemeCard'
import SearchBar from '../components/SearchBar/SearchBar'
import { getThemeData } from '../services/apiService'
import { Theme } from '../interfaces/Theme'

const Themes: React.FC = () => {
	const [themes, setThemes] = useState<Theme[]>([])
	const [filteredThemes, setFilteredThemes] = useState<Theme[]>([])
	const [loading, setLoading] = useState(true)
	const [searchQuery, setSearchQuery] = useState('')
	const [previewIds, setPreviewIds] = useState<string[]>([])

	const themeIds = [
		'cyborg', 'midnight_black', 'minimal_midnight', 'retro', 'solid_purple_haze',
		'terminal', 'tranquil_teal', 'deep_azure', 'hamilton', 'rosa', 'simple_blue',
	]

	const fetchThemes = async (): Promise<Theme[]> => await Promise.all(themeIds.map(getThemeData))

	const fetchAndSetThemes = useCallback(async () => {
		setLoading(true)
		const themesArray = await fetchThemes()
		setThemes(themesArray)
		setFilteredThemes(themesArray)
		setLoading(false)
	}, [])

	useEffect(() => {
		fetchAndSetThemes()
	}, [fetchAndSetThemes])

	useEffect(() => {
		const lowercaseQuery = searchQuery.toLowerCase().trim()
		const filtered = themes.filter(
			(theme) =>
				theme.name.toLowerCase().includes(lowercaseQuery) ||
        theme.description.toLowerCase().includes(lowercaseQuery)
		)
		setFilteredThemes(filtered)
	}, [searchQuery, themes])

	const handleSearch = (query: string) => {
		setSearchQuery(query)
	}

	const onPreview = (id: string) => {
		setPreviewIds((prevPreviewId) =>
			prevPreviewId.includes(id)
				? prevPreviewId.filter((item) => item !== id)
				: [...prevPreviewId, id]
		)
	}

	const clearPreviewIds = () => {
		setPreviewIds([])
	}

	const flow = {
		start: {
			message: (params: Params) => {
				params.injectMessage("Hello 👋! Did you know? The order of specifying themes matters!")
				return "Try previewing some themes below, or click on those on the left! 😊"
			},
			checkboxes: {items: ["Minimal Midnight", "Cyborg", "Terminal"]},
			function: (params: Params) => {
				setPreviewIds(params.userInput.split(",").map(theme => {
					if (theme === "Minimal Midnight") {
						return "minimal_midnight"
					} else if (theme === "Cyborg") {
						return "cyborg"
					} else {
						return "terminal"
					}
				}))
			},
			chatDisabled: true,
			path: "end"
		},
		end: {
			message: "What's next? 😊",
			options: ["Try Again", "Check Documentation", "Discord"],
			path: (params: Params) => {
				if (params.userInput === "Try Again") {
					setPreviewIds([])
				} else if (params.userInput === "Discord") {
					window.open("https://discord.gg/6R4DK4G5Zh")
				} else if (params.userInput === "Check Documentation") {
					window.open("https://react-chatbotify.com")
				} else {
					setPreviewIds([])
					params.injectMessage("Hmmm I'm not sure what you said, but let's try again!")
				}
				return "start"
			}
		}
	}

	return (
		<div className="flex flex-col lg:flex-row h-screen relative">
			{/* Main content area */}
			<div className="order-1 md:order-0 lg:w-3/4 overflow-y-auto bg-gray-900 p-8 hide-scrollbar">
				<div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3
            gap-6 justify-items-center w-full"
					style={{transform: "translateY(8vh)"}}
				>
					{loading
						? Array.from({ length: 9 }).map((_, index) => (
							<Skeleton key={`skeleton-${index}`} width="100%" height={400} />
						))
						: filteredThemes.map((theme) => (
							<ThemeCard
								key={theme.id}
								theme={theme}
								isPreviewed={previewIds.includes(theme.id)}
								onPreview={() => onPreview(theme.id)}
							/>
						))}
				</div>
			</div>

			{/* Pinned search column */}
			<div className="flex flex-col order-0 lg:order-1">
				<div className="bg-black w-full" style={{height: "9vh"}}></div>
				<div className="bg-white shadow-xl p-6 flex flex-col overflow-y-auto hide-scrollbar">
					<div className="mb-4">
						<SearchBar onSearch={handleSearch} />
					</div>
					<div className="lg:block hidden">
						<div className="flex flex-col justify-center items-center bg-gray-100 rounded-lg p-4">
							<ChatBot
								flow={flow}
								themes={previewIds.map(themeId => ({ id: themeId }))}
								settings={{ general: { embedded: true } }}
								styles={{ chatWindowStyle: { height: '60vh', width: '20vw' } }}
							/>
							<button 
								onClick={clearPreviewIds} 
								className="text-white p-2 rounded-lg mt-5"
								style={{backgroundColor: "#491d8d"}}
							>
								Clear Previews
							</button>
						</div>
						<div className="flex flex-col justify-between items-center mb-4 mt-5 w-full">
							<div className="bg-gray-100 rounded-lg p-4 overflow-y-auto shadow-lg w-full max-w-md">
								<h2 className="text-center font-bold mb-4 text-lg text-gray-800">Preview Themes</h2>
								{previewIds.length > 0 ? (
									<ul className="divide-y divide-gray-300">
										{previewIds.map((id, index) => (
											<li
												key={index}
												className="p-3 flex items-center justify-between text-gray-700
                          hover:bg-gray-200 rounded transition duration-150"
											>
												<span>{id}</span>
											</li>
										))}
									</ul>
								) : (
									<p className="text-center text-gray-500">No themes selected for preview</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Modal container */}
			<div id="modal-container" className="fixed inset-0 z-50 pointer-events-none">
				{/* ThemeModals will be rendered here by React's portal */}
			</div>
		</div>
	)
}

export default Themes