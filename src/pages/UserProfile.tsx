import Header from '../components/Header'
import { Link } from 'react-router-dom'
import botAvatar from "../assets/images/bot_avatar.png";
import { CalendarDays, Github, Linkedin, LucideMapPin, Twitter } from 'lucide-react';

type Portfolios = {
	item: {
		bannerImg: string,
		category: string,
		title: string,
		details: string,
		authorImg: string,
		author: string,
	}
}

const portfolios = [
	{
		bannerImg: "https://cdn.easyfrontend.com/pictures/courses/courses1.jpg",
		category: "Marketing",
		title: "The Complete Digital Marketing Guide Course",
		details: "Some quick example text to build on the card the bulk content...",
		authorImg:
			"../assets/images/bot_avatar.png",
		author: "John Smith",
	},
	{
		bannerImg: "https://cdn.easyfrontend.com/pictures/courses/courses2.jpg",
		category: "Development",
		title: "Izomart is providing free course on Web Development",
		details: "Learn web development with Izomart and then you will be...",
		authorImg:
			"../assets/images/bot_avatar.png",
		author: "John Smith",
	},
	{
		bannerImg: "https://cdn.easyfrontend.com/pictures/courses/courses3.jpg",
		category: "Branding",
		title: "A to Z of Branding with Filinzo Academy",
		details:
			"Why should you have the branding knowledge? This is the very first...",
		authorImg:
			"../assets/images/bot_avatar.png",
		author: "John Smith",
	},
	{
		bannerImg: "https://cdn.easyfrontend.com/pictures/courses/courses4.jpg",
		category: "Technology",
		title: "Master React JS and hire your self for sure!",
		details: "React JS: The most popular framework in today's programming...",
		authorImg:
			"../assets/images/bot_avatar.png",
		author: "John Smith",
	},
]

const PortfolioItem = ({ item }: Portfolios ) => (
	<div className="bg-slate-50 h-full rounded overflow-hidden text-black">
		<div className="relative">
			<img src={item.bannerImg} className="w-full" alt={item.title} />
		</div>
		<div className="p-4">
			<a href="#!">
				<p className="text-[15px] opacity-80 mb-2">{item.category}</p>
			</a>
			<a href="#!">
				<h5 className="text-[19px] font-medium leading-snug mb-2">
					{item.title}
				</h5>
			</a>
			<p className="text-[15px] opacity-80">{item.details}</p>
			<div className="flex justify-between mt-4 mb-2">
				<div className="flex items-center">
					<div className="mr-2">
						<img
							src={item.authorImg}
							alt={item.author}
							className="max-w-full h-auto rounded-full border"
							width="40"
						/>
					</div>
					<div>
						<h4 className="text-base font-medium mb-0">{item.author}</h4>
					</div>
				</div>
				<a
					href="#!"
					className="border border-blue-600 px-3 py-2 hover:bg-blue-600 hover:text-white duration-300 rounded uppercase text-sm"
					type="button"
				>
					Gift
				</a>
			</div>
		</div>
	</div>
);

const UserProfilePage = () => {
	const tabBar = [
		{
			isActive: true,
			value: "Themes(4)",
		},
	];

	const TabBar = ({ tabItem }: {tabItem: {isActive: boolean, value: string}}) => (
		<li
			className={`px-2 py-2 ${tabItem.isActive && "border-b-2 border-slate-400/85"}`}
		>
			<button>
				{tabItem.value}
			</button>
		</li>
	);

  return (
	<section className='w-full h-[100%] mx-auto bg-black/90'>
		{/* <Header /> */}
		<div className='relative sm:rounded p-3 h-40 bg-blue-600 flex flex-col justify-center items-center'>
			<div className='rounded-full w-20 h-20 lg:w-28 lg:h-28 absolute -bottom-10 outline outline-black/90 left-10'>
				<img src={botAvatar} alt=""  className=' rounded-full'/>
			</div>

			<div className=' text-center text-slate-200'>
				<p className='text-lg font-semibold sm:text-xl md:text-3xl'>Theme Author Profile</p>
				<p className='text-xs sm:text-base md:text-base'>React ChatBotify</p>
			</div>

			<div className=' absolute bottom-4 right-6 z-30 flex flex-row gap-2'>
				<Github width={18} hanging={18} className=' text-slate-300 '/>
				<Twitter width={18} hanging={18} className=' text-slate-300 '/>
			</div>
		</div>

		<div className='relative h-fit p-4 px-6 text-white'>
			<div className='pt-7'>
				<p className='text-xl font-semibold'>Mishael Joseph</p>
				<Link to={`//https//github.com/`} className='text-sm opacity-80 flex gap-1 items-center w-fit'><Github width={15} hanging={15}/> Mishael-joe</Link>
				<Link to={`//https//github.com/`} className='text-sm opacity-80 flex gap-1 items-center w-fit'><Twitter width={15} hanging={15}/> @Mishaeljoe</Link>
				<Link to={`//https//github.com/`} className='text-sm opacity-80 flex gap-1 items-center w-fit'><Linkedin width={15} hanging={15}/> in/mishael-joe</Link>
				<p className='text-sm opacity-80 flex gap-1 items-center'> <LucideMapPin width={15} hanging={15}/> Spain</p>
			</div>

			<div>
				<p className=' absolute top-2 right-6 text-xs opacity-80 flex gap-1 items-center'> <CalendarDays width={15} hanging={15}/> Joined January 2024</p>
				{/* <p className=' absolute top-2 right-2 text-xs opacity-80'>Member since: 20/04/24</p> */}
			</div>

			<div>
				<ul className="flex flex-wrap justify-center my-4">
					{tabBar.map((tabItem, k) => (
						<TabBar tabItem={tabItem} key={k} />
					))}
				</ul>
			</div>

			<div className="grid grid-cols-12 gap-6 mt-6">
				{portfolios.map((item, i) => (
					<div
						className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
						key={i}
					>
						<PortfolioItem item={item} />
					</div>
				))}
			</div>
		</div>
	</section>
  )
}

export default UserProfilePage