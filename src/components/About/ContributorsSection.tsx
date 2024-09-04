import { Link } from "react-router-dom"
import { Users } from "lucide-react"
import AvatarsGroup from "./AvatarsGroup"

const REACT_CHATBOTIFY_GALLERY_URL = `
https://github.com/tjtanjin/react-chatbotify-gallery-website/blob/main/docs/DeveloperGuide.md`
const REACT_CHATBOTIFY_GALLERY = 'react-chatbotify-gallery-website'
const REACT_CHATBOTIFY_GALLERY_TITLE = "Gallery Website"

const REACT_CHATBOTIFY_GALLERY_API_URL = `
https://github.com/tjtanjin/react-chatbotify-gallery-api`
const REACT_CHATBOTIFY_GALLERY_API = 'react-chatbotify-gallery-api'
const REACT_CHATBOTIFY_GALLERY_API_TITLE = "Gallery API"


const ContributorsSection = () => {
	return (
		<section className="">
			<div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between">
				<div className="space-y-4 flex flex-col items-center mb-6 lg:items-start">
					<Users className="text-secondary-700 size-12"/>
					<h2 className="font-semibold text-3xl">Contributors</h2>
					<p className="text-base max-w-[650px] lg:text-lg">
						We are grateful to the many developers who have contributed
						{" "}to the development of React ChatBotify Gallery,
						{" "}as well as authors of themes & plugins, to make the
						{" "}Gallery what it is today.
						{" "}Your involvement helps keep the platform dynamic and relevant.
						{" "}The list of contributors can be found on the project repositories
					</p>
				</div>
				<div className="space-y-3 lg:space-y-5 lg:pt-16">
					<AvatarsGroup
						repoUrl={REACT_CHATBOTIFY_GALLERY_URL}
						repoName={REACT_CHATBOTIFY_GALLERY}
						repoTitle={REACT_CHATBOTIFY_GALLERY_TITLE}
					/>
					<AvatarsGroup
						repoUrl={REACT_CHATBOTIFY_GALLERY_API_URL}
						repoName={REACT_CHATBOTIFY_GALLERY_API}
						repoTitle={REACT_CHATBOTIFY_GALLERY_API_TITLE}
					/>
				</div>
			</div>
			{/* How to Contribute */}
			<div className="space-y-4 flex flex-col items-center my-12 text-center lg:items-start lg:text-left">
				<h3 className="font-semibold text-2xl">How to Contribute</h3>
				<p className="text-base max-w-[650px] lg:text-lg">
					Want to contribute to React ChatBotify Gallery? We welcome
					{" "}your involvement! Whether you're submitting a new theme,
					{" "}improving existing plugins, or contributing code, your input
					{" "}helps us grow.
					{" "}<Link
						to={REACT_CHATBOTIFY_GALLERY_URL}
						target="_blank"
						className='text-secondary-500 hover:underline'
					>
						Visit our GitHub repositories
					</Link> for contribution
					{" "}guidelines and to get started.
				</p>
			</div>
			{/* Contact us */}
			<div className="space-y-4 flex flex-col items-center pb-12 text-center lg:items-start lg:text-left">
				<h3 className="font-semibold text-2xl">Contact us</h3>
				<p className="text-sm max-w-[650px] lg:text-lg">
					Have questions or want to get in touch?
					{" "}Reach out to us via
					{" "}<Link
						to={REACT_CHATBOTIFY_GALLERY}
						target="_blank"
						className='text-secondary-500 hover:underline'
					>
						Discord
					</Link>
					{" "}and stay in touch with the latest updates and community news!

				</p>
			</div>

		</section>
	)
}
export default ContributorsSection