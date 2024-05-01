import Header from "../components/Header"
import { Link } from "react-router-dom"

const AboutPage = () => {
  return (
    <section className=" bg-black/90 text-slate-200">
      <div className="p-4">
        {/* <Header /> */}
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-lg md:text-2xl md:font-semibold text-center py-4">Unleash the Power of React ChatBotify with Diverse Themes</h1>
          <p className="text-center py-2">React ChatBotify is an open-source library designed to make chatbot development accessible and efficient. Whether you're a seasoned developer or just starting out, our intuitive platform and extensive themes streamline the process, allowing you to focus on crafting exceptional user experiences.</p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <div>
              <h1 className="text-center py-4 font-semibold text-lg">A World of Themes</h1>
              <p className=" text-center">Explore a vibrant marketplace of chatbot themes created by our talented developer community. Find themes for various purposes, from simple FAQ bots to complex conversational interfaces.</p>
            </div>

            <div>
              <h1 className="text-center py-4 font-semibold text-lg">Open source and extensible</h1>
              <p className=" text-center">
                Built with open-source principles, React ChatBotify empowers you to customize
                and extend your chatbot's functionalities. Our themes provide a strong foundation,
                and the open-source nature allows you to tailor them to your specific needs.
              </p>
            </div>
          </div>
          
          <div className="pt-5 flex flex-col sm:flex-row gap-4">
            <div>
              <h1 className="text-center py-4 font-semibold text-lg">From basic to sophisticated</h1>
              <p className=" text-center">
                Our theme selection caters for a wide range of requirements.
                Find themes perfect for straightforward interactions or dive into themes that enable intricate
                conversational flows.
              </p>
            </div>

            <div>
              <h1 className="text-center py-4 font-semibold text-lg">Inspired by the Community</h1>
              <p className=" text-center">
                Get inspired by a thriving community of developers showcasing their
                creations. Browse our community showcases to spark your imagination and discover the 
                pontential of React ChatBotify themes.
              </p>
            </div>
          </div>
          
          <div className="pt-5 flex flex-row gap-4 justify-around text-sm sm:text-base">
            <Link to={`/`}>
              <button className="p-2 bg-sky-600 rounded">Browse Themes Now</button>
            </Link>

            <Link to={``}>
              <button className="p-2 bg-sky-600 rounded">Join our Discord Forum</button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutPage