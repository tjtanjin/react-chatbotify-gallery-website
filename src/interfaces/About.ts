export interface ICard {
  icon: React.ReactNode; // Assuming you're using React components for icons
  heading: string;
  paragraph: string;
}

export interface FeatureBenefitSet {
  title: string;
  cards: ICard[];
}

export interface IContributor {
  avatar_url: string;
  login: string;
  html_url: string;
}