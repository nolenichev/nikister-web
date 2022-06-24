import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import { FcGoogle } from "react-icons/fc"
import { DiRuby } from "react-icons/di"
import { CgFigma } from "react-icons/cg"
import { BsGithub } from "react-icons/bs"
import { RiDatabase2Fill } from "react-icons/ri"

import skillsData from "../data/skills.json"

const icons = [
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	CgFigma,
	SiTailwindcss,
	BsGithub,
	DiRuby,
	RiDatabase2Fill,
	FcGoogle,
]

const ProgressBar = ({
	percentage = 0,
	title,
	icon = () => {},
	iconColor = "fff",
}) => {
	title =
		title === "GOOGlING" ? (
			<>
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
				<div className="relative bg-black rounded-full w-full h-3 overflow-hidden">
					<div
						className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-green-600 to-green-900 rounded-full"
						style={{ width: `${percentage}%` }}
					></div>
				</div>
			</div>
		</div>
	)
}

const Skills = () => {
	const skills = skillsData.map((item, index) => {
		return (
			<ProgressBar
				percentage={item.percentage}
				icon={icons[index]}
				title={item.title}
				iconColor={item.iconColor}
				key={index}
			/>
		)
	})

	return (
		<section className="card p-5 md:p-10 w-full">
			<h2 className="title">Technical Skills</h2>
			<div className="grid gap-y-10 gap-x-14 grid-cols-1 md:grid-cols-3">
				{skills}
			</div>
			<div className="flex mt-16 gap-10">
				<div className="flex-1 card p-10">
					<h2 className="title">Soft Skills</h2>
					<ul className="text">
						<li>{"//"} Logical thinking</li>
						<li>{"//"} Accountability</li>
						<li>{"//"} Team player</li>
						<li>{"//"} Fast learner</li>
						<li>{"//"} Creative</li>
						<li>{"//"} Sociable</li>
					</ul>
				</div>
				<div className="flex-1 card p-10">
					<h2 className="title">Other Skills</h2>
					<ul className="text">
						<li>{"//"} UI / UX</li>
						<li>{"//"} Responsive Web Design</li>
						<li>{"//"} Heroku / Deployment</li>
						<li>{"//"} Functional Programming</li>
						<li>{"//"} OOP</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Skills
