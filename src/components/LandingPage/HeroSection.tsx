import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className='py-[57px] flex items-center gap-3 justify-center flex-col px-5'>
        <h1 className='text-accent-600 text-lg sm:text-xl font-semibold'>React ChatBotify</h1>
        <h2 className='text-accent-900 font-bold text-3xl sm:text-5xl'>Theme Gallery</h2>
        <h3 className='text-accent-600 sm:text-base text-sm text-center w-[250px]'>
          Browse, rate and share themes for your chatbot today!
        </h3>
        <Link className='mt-6' to={"/themes"}>
          <button className='bg-accent-900 hover:bg-gradient-to-r hover:from-secondary-900  hover:to-primary-600 transition-colors duration-300 hover:text-accent-900 px-4 py-2 text-lg rounded-lg'>
            Explore themes
          </button>
        </Link>
      </div>
  )
}

