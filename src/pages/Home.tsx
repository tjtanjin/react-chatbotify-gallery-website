import { Link, useNavigate } from 'react-router-dom';

import { handleLogin } from '../services/authService';
import { useAuth } from '../context/AuthContext';
import { SiteConfig } from '../constants/SiteConfig';
import logo from "../assets/images/logo.png";
import { Button } from 'react-chatbotify';

/**
 * Greets user as they visit the home (landing) page.
 */
const HomePage = () => {
	// used to render different text if user is logged in
	const { isLoggedIn, userData } = useAuth()

	// handles navigation
	const navigate = useNavigate()

	return (
		<div className="relative overflow-hidden h-screen bg-accent-50 w-full px-6">
      <div className='absolute size-[60%] sm:size-[60%] md:size-[60%] bg-gradient-to-r from-secondary-900 -rotate-[30deg] to-primary-600 rounded-full z-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] blur-[150px] sm:blur-[200px]'>
      </div>
      <div className='relative z-1'>
			<div className='w-full h-[64px]'>Header</div>
      <div className='py-[57px] flex items-center gap-3 justify-center flex-col px-5'>
        <h1 className='text-accent-600 text-lg sm:text-xl font-semibold'>React ChatBotify</h1>
        <h2 className='text-accent-900 font-bold text-3xl sm:text-5xl'>Theme Gallery</h2>
        <h3 className='text-accent-600 sm:text-base text-sm text-center w-[250px]'>
          Browse, rate and share themes for your chatbot today!
        </h3>
        <Link className='mt-6' to={"/themes"}>
          <button className='bg-accent-900 hover:bg-gradient-to-r hover:from-secondary-900  hover:to-primary-600 transition-colors duration-300 hover:text-accent-900 px-4 py-2 text-lg rounded-lg'>
            Explore themes
          </button>
        </Link>
      </div>
      <div>
        <img src='' />
      </div>
      </div>

			
		</div>
	)
}

export default HomePage
