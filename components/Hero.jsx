import Image from "next/image"
import avatar from "../img/avatar.png"
import avatarShake from "../img/avatar-shake.png"
import Social from "./Social.jsx"
import { useState } from "react"

const Hero = () => {
	const [pageAvatar, setPageAvatar] = useState(avatar)

	return (
		<section className="card flex flex-col lg:flex-row items-center gap-5 py-5 px-10 relative w-full text-center md:text-left">
			<div className="flex-1 sm:w-1/2 shake relative" data-aos="fade-right" data-aos-delay="700">
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
					<h1 className="mb-2 flex flex-col gap-3">
						<span className="text-4xl md:text-5xl lg:text-6xl font-bold font-title">
							Nick Olenichev
						</span>
						<span className="text-2xl font-semibold text-color">
							Web Developer
						</span>
					</h1>
					<p className="text text-lg mx-auto text-left">
						{"//"} Hello world! My name is Nikita Olenichev. I am a Web
						Developer, having more than{" "}
						<span className="text-color uppercase">2 years</span> of commercial
						experience and more than{" "}
						<a
							href="#portfolio"
							className="text-color underline uppercase hover:no-underline"
						>
							30 projects
						</a>{" "}
						in my portfolio.
						<br />
						Ready to start Your Project!
					</p>
				</div>
			</div>
		</section>
	)
}

export default Hero
