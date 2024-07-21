import React, { useState } from 'react'
import { Theme } from '../interfaces/Theme'
import { Link } from 'react-router-dom'
import FavIcon from '../assets/images/icon_favorite.svg?react'
import GithubIcon from '../assets/images/icon_github_white.svg?react'
import '../styles/theme_card.css'
import ThemeModal from './ThemeModal'

interface Props {
  theme: Theme
}

const ThemeCard: React.FC<Props> = ({ theme }) => {
  const [isFav, setIsFav] = useState(false)
  const [viewDetails, setViewDetails] = useState(false)

  const onPreview = () => {
    setViewDetails(true)
  }

  return (
    <>
      <div className="text-black w-[300px] h-[545px]">
        <button onClick={onPreview} type="button" className="relative group">
          <img
            src={theme.themeImg}
            className="cursor-pointer w-full h-[400px] scale-80 group-hover:-translate-y-6 transition ease-in-out duration"
            alt={theme.name}
          />
          <div className="theme-card-details">View Details</div>
        </button>
        <div className="theme-card-info">
          <div>
            <div className="flex justify-between">
              <p className="theme-card-title">{theme.name}</p>
              <button
                type="button"
                aria-label="Favorite Button"
                className={`theme-card-fav ${isFav && 'active'}`}
                onClick={() => setIsFav((fav) => !fav)}
              >
                <FavIcon />
              </button>
            </div>
            <p className="text-[15px] opacity-80">{theme.description}</p>
          </div>

          <div className="flex justify-between">
            <h4 className="theme-card-author">{theme.authorName}</h4>
            <Link to={`/profile/${theme.github}`} className="theme-card-github">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
      <ThemeModal
        isOpen={viewDetails}
        theme={theme}
        onClose={() => setViewDetails(false)}
      />
    </>
  )
}

export default ThemeCard
