import { Hourglass } from "lucide-react"

const HistorySection = () => {
	return (
		<section className="flex flex-col items-center text-center gap-4">
			<Hourglass className="text-secondary-700 size-12 rotate-12"/>
			<h2 className="font-semibold text-3xl">History and Background</h2>
			<p className="text-base lg:text-lg max-w-[650px]">
				React ChatBotify Gallery started as a project
				{" "}to complement the v2 release of React ChatBotify in 2024.
				{" "}It was born out of the need for a centralized repository
				{" "}of chatbot themes and plugins.
				{" "}As more developers began contributing,
				{" "}the platform quickly grew into a vibrant community,
				{" "}constantly evolving to meet the needs of its users.
			</p>
		</section>
	)
}
export default HistorySection