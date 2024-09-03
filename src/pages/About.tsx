import HeroAbout from "../components/About/HeroAbout"
import MissionSection from "../components/About/MissionSection"
import FeaturesAndBenefitsSection from "../components/About/FeaturesAndBenefitsSection"

const About: React.FC = () => {
	return (
		<div className="bg-slate-950 text-slate-50">
			<div className="container px-6 mx-auto">
				<HeroAbout />
				<div className="my-32"/>
				<MissionSection />
				<div className="my-32"/>
				<FeaturesAndBenefitsSection />
			</div>
		</div>
	)
}
export default About