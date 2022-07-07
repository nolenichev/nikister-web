import Image from "next/image"
import { techical, cards, soft, other } from "../data/skills"
import about2 from "../img/about2.png"
import about3 from "../img/about3.png"

const ProgressBar = ({
	percentage = 0,
	title,
	icon = () => {},
	iconColor = "fff",
}) => {
	title =
		title === "GOOGlING" ? (
			<>
				<span className="text-green-400">G</span>
				<span className="text-red-400">O</span>
				<span className="text-yellow-400">O</span>
				<span className="text-blue-400">G</span>
				<span className="text-green-400">L</span>
				<span className="text-red-400">I</span>
				<span className="text-blue-400">N</span>
				<span className="text-yellow-400">G</span>
			</>
		) : (
			title
		)

	return (
		<div className="w-full flex gap-4 items-center">
			<div className={`text-5xl`} style={{ color: `#${iconColor}` }}>
				{icon()}
			</div>
			<div className="flex-1">
				<div className="flex gap-5 justify-between mb-2">
					<h3 className="text text-lg">{title}</h3>
					<span className="text">{percentage}%</span>
				</div>
				<div className="relative bg-gray-900 rounded-full w-full h-3 overflow-hidden">
					<div
						className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-green-600 to-green-900 rounded-full"
						style={{ width: `${percentage}%` }}
					></div>
				</div>
			</div>
		</div>
	)
}

const SkillCard = ({ item }) => {
	const { icon, title, color } = item

	return (
		<div className="flex gap-3 flex-col text-center justify-center items-center w-12 md:w-fit">
			<span className="text-3xl md:text-5xl" style={{ color: `#${color}` }}>
				{icon()}
			</span>
			<span className="font-bold text-sm font-text">{title}</span>
		</div>
	)
}

const skillsList = (skills) => {
	return skills.map((item, index) => {
		return (
			<li key={index}>
				{"//"} {item}
			</li>
		)
	})
}

const Skills = () => {
	const techicalSkills = techical.map((item, index) => {
		return (
			<ProgressBar
				percentage={item.percentage}
				icon={item.icon}
				title={item.title}
				iconColor={item.iconColor}
				key={index}
			/>
		)
	})

	const cardsList = cards.map((item, index) => {
		return <SkillCard item={item} key={index} />
	})

	return (
		<section className="card p-5 md:p-10 w-full scroll-m" id="skills">
			<h2 className="title">Technical Skills</h2>
			<div
				className="grid gap-y-10 gap-x-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-black rounded-3xl p-5 md:p-10"
				data-aos="zoom-out-up"
			>
				{techicalSkills}
			</div>
			<h2 className="title mt-10">Also…</h2>
			<div
				className="flex flex-wrap gap-x-12 gap-y-10 card-2 justify-center"
				data-aos="zoom-out-up"
			>
				{cardsList}
			</div>
			<div className="flex flex-col md:flex-row mt-10 gap-10">
				<div className="flex-1">
					<h2 className="title">Other Skills</h2>
					<div className="relative" data-aos="zoom-out-up">
						<ul className="text card-2">{skillsList(other)}</ul>
						<div className="absolute top-6 right-6 w-1/3">
							<Image
								src={about3}
								alt="about"
								placeholder="blur"
								className="relative w-full"
							/>
						</div>
					</div>
				</div>
				<div className="flex-1">
					<h2 className="title">Soft Skills</h2>
					<div className="relative" data-aos="zoom-out-up" data-aos-delay="150">
						<ul className="text card-2">{skillsList(soft)}</ul>
						<div className="absolute -bottom-1 right-6 w-1/3">
							<Image
								src={about2}
								alt="about"
								placeholder="blur"
								className="relative w-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills
