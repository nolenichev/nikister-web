import Typewriter from "typewriter-effect"
import Image from "next/image"
import avatar from "../img/avatar.png"
import { Social } from "./Social"
import personalInfo from "../data/personalInfo.json"

const Hero = () => {
	return (
		<div className="card flex items-center gap-14 py-10 px-20 relative w-full">
			<div className="w-72 h-72 relative rounded-full overflow-hidden shadow-lg shadow-green-700">
				<Image src={avatar} alt="avatar" objectFit="cover" />
			</div>
			<div className="flex-1">
				<div>
					<h1 className="text-5xl font-bold mb-3 font-title">
						<Typewriter
							onInit={(typewriter) => {
								typewriter.typeString("Nick Olenichev").pauseFor(1500).start()
							}}
						/>
					</h1>
					<h2 className="mb-3 text-2xl text-green-700">Web Developer</h2>
				</div>
				<p className="text text-lg">{personalInfo.description}</p>
				<Social />
			</div>
		</div>
	)
}

export default Hero
