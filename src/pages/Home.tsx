import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import { handleLogin } from '../services/authService';

const HomePage = () => {
	const { isLoggedIn, userData } = useAuth();

	const navigate = useNavigate();

	const handleBrowseThemes = () => {
		navigate("/themes");
	};

	return (
		<div className="relative bg-black text-white min-h-screen flex">
			<div className="w-1/2 flex flex-col justify-center items-center p-10 fade-down">
				<h1 id="title" className="text-6xl font-bold text-center leading-tight mb-4">Welcome to <br className="md:hidden" /> React ChatBotify Gallery</h1>
				{isLoggedIn
					?
					<p id="subtitle" className="text-lg text-center mb-8">It's good to see you, {userData?.name}!</p>
					:
					<p id="subtitle" className="text-lg text-center mb-8">Browse, rate and share themes for your chatbot today!</p>
				}
				<div className="flex justify-center">
					{!isLoggedIn &&
						<button className="bg-white text-black px-6 py-3 rounded-md mr-4 hover:bg-blue-500 transition-colors duration-300" onClick={() => {
							handleLogin("/themes");
						}}>Login</button>
					}
					<button className="border border-white px-6 py-3 rounded-md hover:bg-purple-800 transition-colors duration-300" onClick={handleBrowseThemes}>Browse Themes</button>
				</div>
				{/* todo: add logos to link to documentation, github, discord etc */}
			</div>
			<div className="w-1/2 absolute top-0 bottom-0 right-0 opacity-40 bg-no-repeat bg-cover bg-center animate-bob background-image"/>
		</div>
	);
};

export default HomePage;