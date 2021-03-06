import BasicInfo from "./BasicInfo"
import personalInfo from "../data/personalInfo.json"
import Languages from "./Languages"
import Image from "next/image"
import about from "../img/about.png"

const About = () => {
	const skill = personalInfo.todo.map((item, index) => {
		return (
			<li key={index} className="flex gap-5 items-center">
				<span className="text-xl">{item.icon}</span>{" "}
				<span className="text">{item.text}</span>
			</li>
		)
	})

	return (
		<div
			className="flex md:gap-10 flex-col-reverse lg:flex-row scroll-m"
			id="about"
		>
			<section className="flex flex-col justify-between flex-2">
				<div className="card p-5 md:p-10">
					<h2 className="title">Shortly About Me</h2>
					<div className="card-2 mb-10" data-aos="zoom-out-up">
						<p className="text text-xl">
							{"//"} I am passionate about Programming and IT technologies. I am
							always happy to learn something new. <br />
							As for my hobbies, I am fond of GameDev, NFT and travelling.{" "}
						</p>
					</div>
					<Languages />
				</div>
				<div className="card p-5 md:p-10 flex-1">
					<h2 className="title">What I can do</h2>
					<div className="relative" data-aos="zoom-out-up">
						<ul className="list-none text-lg flex flex-col gap-1 card-2">
							{skill}
						</ul>
						<div className="absolute -bottom-1 right-3 w-1/4">
							<Image
								src={about}
								alt="about"
								placeholder="blur"
								className="relative w-full"
							/>
						</div>
					</div>
				</div>
			</section>

			<BasicInfo />
		</div>
	)
}

export default About
