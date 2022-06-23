import Image from "next/image"
import avatar from "../img/avatar.png"
import personalInfo from "../data/personalInfo.json"

const Hero = () => {
	return (
		<section className="card flex flex-col md:flex-row items-center gap-10 md:gap-20 py-10 px-10 md:px-20 relative w-full text-center md:text-left">
			<div className="flex-1">
				<Image
					src={avatar}
					alt="avatar"
					placeholder="blur"
					className="relative rounded-full w-full"
				/>
			</div>
			<div className="flex-2">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold mb-3 font-heroTitle">
						Nick Olenichev
					</h1>
					<h2 className="mb-3 text-2xl text-color">Web Developer</h2>
				</div>
				<p className="text text-lg">{personalInfo.description}</p>
				{/* <button className="px-4 pt-2 pb-1 text-color rounded-xl text-lg font-bold font-title mt-5 uppercase bg-black">
					Contact Me
				</button> */}
			</div>
		</section>
	)
}

export default Hero
