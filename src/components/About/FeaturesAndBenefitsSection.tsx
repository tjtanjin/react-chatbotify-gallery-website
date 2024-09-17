import { Blocks, Settings, Share2, Timer, TrendingUp, UnfoldHorizontal } from "lucide-react"
import CardsSection from "./CardsSection"

const features = {
	title: 'Key Features',
	cards: [
		{
			icon: <UnfoldHorizontal />,
			heading: 'Extensive Library',
			paragraph: 'Access a growing collection of themes and plugins specifically designed for React ChatBotify.'
		},
		{
			icon: <TrendingUp />,
			heading: 'Community Ratings',
			paragraph: 'Browse through user ratings to find the most popular and reliable options.'
		},
		{
			icon: <Share2 />,
			heading: 'Collaborative Community',
			paragraph: 'Download and integrate themes and plugins with your chatbot effortlessly.'
		},
	]
}

const benefits = {
	title: 'Benefits',
	cards: [
		{
			icon: <Timer />,
			heading: 'Save Time',
			paragraph: 'Utilize pre-built themes and plugins to accelerate your development process.'
		},
		{
			icon: <Settings />,
			heading: 'Enhance Functionality',
			paragraph: 'Easily add new features and improve the user experience of your chatbot.'
		},
		{
			icon: <Blocks />,
			heading: 'Easy Integration',
			paragraph: `
          Join a community of like-minded developers,
          share your own creations,
          and contribute to the growth of the platform.
        `
		},
	]
}


const FeaturesAndBenefitsSection = () => {
	return (
		<section>
			<CardsSection content={features}/>
			<div className="my-32"/>
			<CardsSection content={benefits}/>
		</section>
	)
}
export default FeaturesAndBenefitsSection