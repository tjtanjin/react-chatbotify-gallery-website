import React from "react";
import botAvatar from "../bot_avatar.png";


// const SubscribeForm = () => (
// 	<form className="bg-white bg-opacity-10 rounded-[50px] overflow-hidden text-white flex items-center mt-6 md:mr-12">
// 		<input
// 			name="email"
// 			className="bg-transparent py-4 px-5 placeholder:text-lg placeholder:text-opacity-60 focus:outline-none grow"
// 			type="email"
// 			placeholder="Enter email"
// 			required
// 		/>
// 		<button className="text-xl font-semibold duration-500 hover:text-blue-600 mr-7">
// 			<FontAwesomeIcon icon={faPaperPlane.icon}/>
// 		</button>
// 	</form>
// );

const Header = () => {
	return (
		<div className="py-2">
			<div className="absolute top-0 left-0 right-0 bottom  -z-[1]" />
			<div className="container">
				<div className="grid grid-cols-12">
					<div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4">
						<div className="md:text-start flex flex-row content-center">
								<img src={botAvatar} className="h-10 w-10 rounded-full"/>
								<p className="text-black font-bold text-xl my-auto ml-2">React ChatBotify <i>Theme Gallery</i></p>
							{/* <SubscribeForm /> */}
						</div>
					</div>
				</div>
			</div>
			</div>
	);
};

export default Header;

