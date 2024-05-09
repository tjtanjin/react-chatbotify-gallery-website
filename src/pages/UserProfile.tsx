import { Link, useParams } from 'react-router-dom'
import botAvatar from "../assets/images/bot_avatar.png";
import { CalendarDays, Github, Loader, LucideMapPin, Twitter } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCallback, useEffect, useState } from 'react';
import { GithubUserDetails, Theme } from '../interfaces/Theme';
import { getThemeData } from '../services/apiService';

interface Props {
	theme: Theme;
}

const UserProfilePage: React.FC = () => {
	// const { userData } = useAuth();
	const params = useParams<{id: string}>()
	const githubUsername = params.id;
	const [themes, setThemes] = useState<Theme[]>([]);
	const [userDetails, setUserDetails] = useState<GithubUserDetails>({
		name: '',
		login: '',
		bio: '',
		avatar_url: '',
		twitter_username: '',
		html_url: '',
		location: '',
	})

	const fetchAndSetThemes = useCallback(async () => {
		const themesArray = await fetchThemes();
		setThemes([...themesArray])
	},[])

	const themeNames = ['cyborg','midnight_black','minimal_midnight','retro','solid_purple_haze','terminal','tranquil_teal']
	const fetchThemes = async (): Promise<Theme[]> => {
		return await Promise.all(themeNames.map(getThemeData))
	}

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await fetch(`https://api.github.com/users/${githubUsername}`);
				let data: GithubUserDetails = await response.json()
				setUserDetails(data)
				// console.log( `response`, data);
			} catch (error) {
				console.log(error);
			}
		}

		fetchUserData();
	}, [])

	useEffect(() => {
		fetchAndSetThemes()
	},[fetchAndSetThemes])

	const Card: React.FC<Props> = ({ theme }) => {

		if (theme.github === githubUsername) {
			return (
				<div className="bg-slate-50 text-black w-[300px] h-[535px] rounded">
					<img src={theme.themeImg} className="w-full h-[390px]" alt={theme.name} />

					<div className="p-2 flex flex-col justify-between h-[145px]">
						<div>
							<p className="text-[15px] opacity-80 mb-2">{theme.name}</p>
							<p className="text-[15px] opacity-80">{theme.description}</p>
						</div>

						<div className='flex justify-between'>
							<h4 className="text-base font-medium mb-0">{theme.authorName}</h4>

							<Link to={`/profile/${theme.github}`}>{theme.github}</Link>
						</div>
					</div>
				</div>
			)
		}
	}

  return (
	<main className='w-full h-screen mx-auto bg-black'>
		<div className='relative sm:rounded p-3 h-40 bg-blue-600 flex flex-col justify-center items-center'>
			<div className='rounded-full w-20 h-20 lg:w-28 lg:h-28 absolute -bottom-10 outline outline-black/90 left-10'>
				{userDetails?.name !== '' ? <img src={userDetails?.avatar_url} alt={userDetails?.name}  className=' rounded-full'/> : <img src={botAvatar} alt={userDetails?.name}  className=' rounded-full'/> } 
			</div>

			<div className=' text-center text-slate-200'>
				<p className='text-lg font-semibold sm:text-xl md:text-3xl'>{userDetails?.name !== '' ? `${userDetails.name.toUpperCase()}'S PROFILE` : `Theme Author Profile`}</p>
				{userDetails?.bio !== '' && <p className='text-xs sm:text-base md:text-base'>{userDetails?.bio}</p>}
				<p className='text-xs sm:text-base md:text-base'>React ChatBotify</p>
			</div>

			<div className=' absolute bottom-4 right-6 z-0 flex flex-row gap-2 sm:hidden'>
				<Github width={18} hanging={18} className=' text-slate-300 '/>
				<Twitter width={18} hanging={18} className=' text-slate-300 '/>
			</div>
		</div>

		<div className='relative h-fit p-4 px-6 text-white'>
			<div className='pt-7'>
				<p className='text-xl font-semibold'>{userDetails?.name}</p>
				<Link to={userDetails?.html_url} className='text-sm opacity-80 flex gap-1 items-center w-fit'><Github width={15} hanging={15}/>{userDetails?.login}</Link>
				{userDetails?.twitter_username !== null && <p className='text-sm opacity-80 flex gap-1 items-center w-fit'><Twitter width={15} hanging={15}/>{userDetails?.twitter_username}</p>}
				<p className='text-sm opacity-80 flex gap-1 items-center'> <LucideMapPin width={15} hanging={15}/>{userDetails?.location}</p>
			</div>

			<div className='absolute top-2 right-6 text-xs opacity-80'>
				<p className='flex gap-1 items-center'> <CalendarDays width={15} hanging={15}/> Joined January 2024</p>
				{/* <p className=' absolute top-2 right-2 text-xs opacity-80'>Member since: 20/04/24</p> */}
			</div>
		</div>

		<div className="w-full bg-black p-4 flex flex-col justify-center gap-4 sm:flex-row">
			{userDetails?.name !== '' ? 
				<>
					{themes.map(theme => (
						<Card key={theme.id} theme={theme} />
					))}
				</> : 
				<p className='flex flex-row gap-4 text-slate-100'><Loader className=' animate-spin'/> Loading...</p>
			} 
		</div>
	</main>
  )
}

export default UserProfilePage
