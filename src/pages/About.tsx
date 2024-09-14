import HeroAbout from "../components/About/HeroAbout"
import MissionSection from "../components/About/MissionSection"
import FeaturesAndBenefitsSection from "../components/About/FeaturesAndBenefitsSection"
import HistorySection from "../components/About/HistorySection"
import ContributorsSection from "../components/About/ContributorsSection"

const About: React.FC = () => {
	return (
		<div className="bg-slate-950 text-slate-50">
			<div className="container px-6 mx-auto">
				<HeroAbout />
				<div className="my-32" />
				<MissionSection />
				<div className="my-32" />
				<FeaturesAndBenefitsSection />
				<div className="my-32" />
				<HistorySection />
				<div className="my-32" />
				<ContributorsSection />
			</div>
		</div>
	)
}
export default About