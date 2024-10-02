import img1 from './../../assets/images/LandingPage/theme-1.png'
import img2 from './../../assets/images/LandingPage/theme-2.png'
import img3 from './../../assets/images/LandingPage/theme-3.png'
import img4 from './../../assets/images/LandingPage/theme-4.png'
export default function ImageHeroSection() {
	return (
		<div className='flex justify-center gap-6'>
			<img src={img1} className='w-[127px] h-[120px] -rotate-6 rounded-lg bg-cover' />
			<img src={img2} className='w-[127px] h-[120px] rotate-6 rounded-lg bg-cover' />
			<img src={img3} className='w-[127px] h-[120px] -rotate-6 rounded-lg bg-cover' />
			<img src={img4} className='w-[127px] h-[120px] rotate-6 rounded-lg bg-cover' />
		</div>
	)
}

