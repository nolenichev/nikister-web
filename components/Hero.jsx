import Image from "next/image"
import avatar from "../img/avatar.png"
import avatarShake from "../img/avatar-shake.png"
import personalInfo from "../data/personalInfo.json"
import Social from "./Social.jsx"
import { useState } from "react"

const Hero = () => {
	const [pageAvatar, setPageAvatar] = useState(avatar)

	return (
		<section className="card flex flex-col md:flex-row items-center gap-10 md:gap-16 py-10 px-10 md:px-16 relative w-full text-center md:text-left">
			<div className="flex-1 shake">
				<Image
					src={pageAvatar}
					alt="avatar"
					placeholder="blur"
					className="relative"
					onMouseEnter={() => {
						setPageAvatar(avatarShake)
					}}
					onMouseLeave={() => {
						setPageAvatar(avatar)
					}}
				/>
			</div>
			<div className="flex-2">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold mb-3 font-heroTitle">
						Nick Olenichev
					</h1>
					<h2 className="mb-3 text-2xl uppercase font-semibold text-color">
						Web Developer
					</h2>
					<p className="text text-lg mx-auto text-left">{personalInfo.description}</p>

					<Social />
				</div>
			</div>
		</section>
	)
}

export default Hero
