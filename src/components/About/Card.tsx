import { ICard } from "../../interfaces/About"

const Card: React.FC<ICard> = ({ icon, heading, paragraph}) => {
	return (
		<div className={
			`
          max-w-sm p-6 bg-slate-900 border border-slate-500
          rounded-lg
          shadow
        text-slate-50 text-center
          space-y-4
        `
		}
		>
			<div className={
				`
            w-fit mx-auto
            rounded-full p-3
            flex justify-center items-center
          text-secondary-700 bg-secondary-900 bg-opacity-15
          `
			}
			>
				{icon}
			</div>
			<h5 className="mb-2 text-2xl font-bold tracking-tight">{heading}</h5>
			<p className="font-normal text-base lg:text-lg">{paragraph}</p>
		</div>
	)
}
export default Card