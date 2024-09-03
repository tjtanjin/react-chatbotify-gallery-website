import { Link } from 'react-router-dom'
import HeroImg from '../../assets/images/About/Hero-img.png'

const REACT_CHATBOTIFY_URL = "https://www.npmjs.com/package/react-chatbotify";

const HeroAbout = () => {
	return (
		<section className='flex flex-col justify-centre items-center pt-32 gap-12 lg:flex-row lg:justify-between'>
			<div className='flex-1 space-y-6 text-center lg:text-left'>
				<h1 className='font-extrabold text-2xl lg:text-5xl'>
					Welcome to
					<br/>
					React ChatBotify Gallery
				</h1>
				<p className='space-y-4 text-sm lg:text-lg max-w-[500px]'>
					<span className='block'>
						A community-driven platform where developers
						{' '} and enthusiasts can browse, rate,
						{' '} and share custom themes and plugins for
						{' '}
						<Link
							to={REACT_CHATBOTIFY_URL}
							className='text-secondary-500 hover:underline'
							target="_blank"
						>
							React ChatBotify
						</Link>.
					</span>
					<span className='block'>
						Our gallery offers a wide range of works contributed by users worldwide,
						{' '} making it easier than ever to enhance your chatbot's design and functionality.
					</span>
				</p>
			</div>
			<div className='relative flex-1'>
				<img src={HeroImg} className='size-3/4 mx-auto relative z-10 aspect-square lg:mx-0 lg:ml-auto'/>
				<div
					className={
						`
              absolute size-[55%]
              bg-gradient-to-r from-secondary-900 to-primary-500
              -rotate-45
              rounded-full
              z-0 top-[55%] left-[60%]
              -translate-x-[50%] -translate-y-[50%]
              blur-[200px]
            `
					}
				/>
			</div>
		</section>
	)
}
export default HeroAbout