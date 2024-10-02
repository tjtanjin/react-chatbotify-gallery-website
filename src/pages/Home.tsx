import { Link, useNavigate } from 'react-router-dom';

import { handleLogin } from '../services/authService';
import { useAuth } from '../context/AuthContext';
import { SiteConfig } from '../constants/SiteConfig';
import logo from "../assets/images/logo.png";
import { Button } from 'react-chatbotify';
import HeroSection from '../components/LandingPage/HeroSection';

import NavigationBar from '../components/NavigationBar/NavigationBar';
import ImageHeroSection from '../components/LandingPage/ImageHeroSection';

/**
 * Greets user as they visit the home (landing) page.
 */
const HomePage = () => {
	// used to render different text if user is logged in
	const { isLoggedIn, userData } = useAuth()

	// handles navigation
	const navigate = useNavigate()

	return (
		<div className="relative overflow-hidden h-screen bg-accent-50 w-full">
			<div className='absolute size-[60%] sm:size-[60%] md:size-[60%] bg-gradient-to-r from-secondary-900 -rotate-[30deg] to-primary-600 rounded-full z-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] blur-[150px] sm:blur-[200px]'>
			</div>
			<div className='relative z-1'>
				<NavigationBar />
				<HeroSection />
				<ImageHeroSection />
			</div>

			
		</div>
	)
}

export default HomePage
