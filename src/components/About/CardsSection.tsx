import { FeatureBenefitSet } from "../../interfaces/About"
import Card from "./Card"

type Props = {
  content: FeatureBenefitSet
}

const CardsSection: React.FC<Props> = ({content}) => {
	return (
		<div className="w-fit mx-auto text-center">
			<h2 className="font-semibold text-3xl mb-8">{content.title}</h2>
			<div className="flex flex-col gap-5 lg:flex-row">
				{
					content.cards.map(card => (
						<Card
							key={card.heading}
							icon={card.icon}
							heading={card.heading}
							paragraph={card.paragraph}
						/>
					))
				}
			</div>
		</div>
	)
}
export default CardsSection