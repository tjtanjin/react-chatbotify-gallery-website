import React,{useState} from "react";
import botAvatar from "../assets/images/bot_avatar.png";


const Header = () => {
	const [loggedIn,setLoggedIn] = useState<boolean>(false);
	return (
		<div className="py-2">
			{/* <div className="absolute top-0 left-0 right-0 bottom  -z-[1]" /> */}
			<div className="container">
				<div className="grid grid-cols-12">
					<div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4">
						<div className="md:text-start flex flex-row content-center">
								<img src={botAvatar} className="h-10 w-10 rounded-full"/>
								<p className="text-black font-bold text-xs sm:text-base md:text-xl my-auto ml-2">React ChatBotify <i>Theme Gallery</i></p>
						</div>
					</div>
					<div className="xl:col-span-8 flex justify-end">
						<div className="flex flex-row content-center items-center cursor-pointer">
						<a className="hover:underline" href="https://github.com/tjtanjin/react-chatbotify" target="_blank">GitHub </a>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-0.5 content-center">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
						</div>
						<div className="flex flex-row content-center items-center mx-2 cursor-pointer">
						<a className="hover:underline" href="https://discord.gg/ahGTMgAw" target="_blank">Discord</a>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-0.5 content-center">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
						</div>
						<button onClick={() => setLoggedIn(!loggedIn)} className="mr-2">{loggedIn ? "Logout": "Login"}</button>
						{loggedIn ? <p className="content-center">Profile</p>: null}
						</div>
				</div>
			</div>
		</div>
	);
};

export default Header;

