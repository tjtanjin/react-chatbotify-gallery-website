import React from "react";
import botAvatar from "../assets/images/bot_avatar.png";


const Header = () => {
	return (
		<div className="py-2">
			<div className="absolute top-0 left-0 right-0 bottom  -z-[1]" />
			<div className="container">
				<div className="grid grid-cols-12">
					<div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4">
						<div className="md:text-start flex flex-row content-center">
								<img src={botAvatar} className="h-10 w-10 rounded-full"/>
								<p className="text-black font-bold text-xs sm:text-base md:text-xl my-auto ml-2">React ChatBotify <i>Theme Gallery</i></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;

