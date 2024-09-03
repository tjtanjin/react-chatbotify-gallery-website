import { Goal } from "lucide-react"

const MissionSection = () => {
	return (
		<section className="flex flex-col items-center text-center gap-4">
			<Goal className="text-secondary-700 size-12"/>
			<h2 className="font-semibold text-3xl">Mission and Vision</h2>
			<p className="space-y-2 text-sm lg:text-lg max-w-[650px]">
				<span className="block">
					Our mission is to empower developers by providing
					{" "}a centralized hub for sharing and discovering
					{" "}high-quality themes and plugins for React ChatBotify.
				</span>
				<span className="block">
					We envision a vibrant community where creativity
					{" "}and collaboration thrive,
					{" "}enabling chatbots to become more customizable
					{" "}and accessible for everyone.
				</span>
			</p>
		</section>
	)
}
export default MissionSection