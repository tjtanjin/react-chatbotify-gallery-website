import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { handleLogin } from '../../services/authService';
import { useAuth } from '../../context/AuthContext';
import { SiteConfig } from '../../constants/SiteConfig';
import logo from '../../assets/images/logo.png';
import AppThemeToggle from './AppThemeToggle';

/**
 * Navigation bar for users to navigate between pages.
 */

const navBarClass = "sticky bg-black top-0 w-full z-50 text-white py-2 px-6 flex justify-between items-center"
const NavigationBar = () => {
	// context for handling user data
	const { isLoggedIn, setIsLoggedIn, setUserData } = useAuth()

	// handles page navigation
	const navigate = useNavigate()

	// menu used for mobile view
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	const navbarRef = useRef<HTMLDivElement>(null)

	useEffect(function(){
		window.addEventListener('scroll',function(e){
			if(navbarRef.current) {
				if(window.scrollY >= 50) {
					navbarRef.current.className = navBarClass + ' opacity-80'
				} else {
					navbarRef.current.className = navBarClass
				}
			}
		})
	},[])

	return (
		<nav
			className={navBarClass}
			style={{ height: '8vh' }}
			ref={navbarRef}
		>
			<Link to="/">
				{' '}
				{/* Wrap logo and title with Link */}
				<img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
			</Link>

			<div className="relative">
				<button
					onClick={toggleMenu}
					className="block lg:hidden"
					type="button"
					aria-label="Menu"
				>
					<svg
						className="w-6 h-6 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>

				{menuOpen && (
					<div
						className="absolute right-0 mt-2 bg-gray-800 border
							border-gray-600 rounded-md shadow-lg py-1 w-48 z-10"
					>
						<ul className="px-2">
							{/* needs improvement */}
							{/* <li className="my-1">
								<Link to="/about" className="block px-4 py-2 hover:bg-gray-700">
									About
								</Link>
							</li> */}
							<li className="my-1">
								<Link
									to="/plugins"
									className="block px-4 py-2 hover:bg-gray-700"
								>
									Plugins
								</Link>
							</li>
							<li className="my-1">
								<Link
									to="/themes"
									className="block px-4 py-2 hover:bg-gray-700"
								>
									Themes
								</Link>
							</li>
							<li className="my-1">
								<Link
									to="/theme-builder"
									className="block px-4 py-2 hover:bg-gray-700"
								>
									Theme Builder
								</Link>
							</li>
							<li className="my-1">
								<Link
									to="https://react-chatbotify.com"
									target="_blank"
									className="block px-4 py-2 hover:bg-gray-700"
								>
									Documentation
								</Link>
							</li>
							<li className="my-1">
								<Link
									to="https://discord.gg/6R4DK4G5Zh"
									target="_blank"
									className="block px-4 py-2 hover:bg-gray-700"
								>
									Discord
								</Link>
							</li>
							{/* needs improvement */}
							{/* <li className="my-1">
								<Link
									to="/terms-of-service"
									className="block px-4 py-2 hover:bg-gray-700"
								>
									Terms of Service
								</Link>
							</li> */}
							{isLoggedIn ? (
								<>
									<li className="my-1">
										<Link
											to="/profile"
											className="block px-4 py-2 hover:bg-gray-700"
										>
											Profile
										</Link>
									</li>
									<li className="my-1">
										<button
											className="block px-4 py-2 hover:bg-gray-700"
											type="button"
										>
											Logout
										</button>
									</li>
								</>
							) : (
								<li className="my-1">
									<Link
										to="/login"
										className="block px-4 py-2 hover:bg-gray-700"
									>
										Login
									</Link>
								</li>
							)}
						</ul>
					</div>
				)}
			</div>

			<ul className="hidden lg:flex pr-20">
				{/* needs improvement */}
				<li className="mr-8">
					<Link to="/about" className="hover:text-blue-500">
						About
					</Link>
				</li>
				<li className="mr-8">
					<Link to="/plugins" className="hover:text-blue-500">
						Plugins
					</Link>
				</li>
				<li className="mr-8">
					<Link to="/themes" className="hover:text-blue-500">
						Themes
					</Link>
				</li>
				<li className="mr-8">
					<Link to="/theme-builder" className="hover:text-blue-500">
						Theme Builder
					</Link>
				</li>
				<li className="mr-8">
					<Link
						to="https://react-chatbotify.com"
						target="_blank"
						className="hover:text-blue-500"
					>
						Documentation
					</Link>
				</li>
				<li className="mr-8">
					<Link
						to="https://discord.gg/6R4DK4G5Zh"
						target="_blank"
						className="hover:text-blue-500"
					>
						Discord
					</Link>
				</li>
				{/* needs improvement */}
				{/* <li className="mr-8">
					<Link to="/terms-of-service" className="hover:text-blue-500">
						Terms of Service
					</Link>
				</li> */}
				{isLoggedIn ? (
					<>
						<li className="mr-8">
							<Link to="/profile" className="hover:text-blue-500">
								Profile
							</Link>
						</li>
						<li>
							<button
								type="button"
								onClick={() => {
									setIsLoggedIn(false)
									setUserData(null)
									navigate('/')
								}}
								className="mr-8"
							>
								Logout
							</button>
						</li>
					</>
				) : (
					<li>
						<button
							type="button"
							onClick={() => handleLogin()}
							className="hover:text-blue-500 mr-8"
						>
							Login
						</button>
					</li>
				)}
				<li>
					<AppThemeToggle />
				</li>
			</ul>
		</nav>
	)
}

export default NavigationBar
