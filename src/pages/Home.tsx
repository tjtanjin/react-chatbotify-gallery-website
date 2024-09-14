import { Link, useNavigate } from 'react-router-dom';

import { handleLogin } from '../services/authService';
import { useAuth } from '../context/AuthContext';
import { SiteConfig } from '../constants/SiteConfig';
import logo from "../assets/images/logo.png";

/**
 * Greets user as they visit the home (landing) page.
 */
const HomePage = () => {
	// used to render different text if user is logged in
	const { isLoggedIn, userData } = useAuth()

	// handles navigation
	const navigate = useNavigate()

	return (
		<div className="relative overflow-hidden h-screen bg-[#09090B] w-full px-6">
      <div className='absolute size-[100%] sm:size-[60%] md:size-[50%] bg-gradient-to-r from-[#4F3699] -rotate-[30deg] to-[#30AFC7] rounded-full z-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] blur-[200px]'>

      </div>
			

			
		</div>
	)
}

export default HomePage
