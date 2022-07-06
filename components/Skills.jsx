import { techical, cards, soft, other } from "../data/skills"

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

const SkillCard = ({ item, index }) => {
	const { icon, title, color } = item

	return (
		<div
			className="bg-black rounded-3xl p-3 w-full flex gap-3 flex-col text-center justify-center items-center"
			data-aos="zoom-out-up"
			data-aos-delay={index * 50}
		>
			<span className="text-4xl" style={{ color: `#${color}` }}>
				{icon()}
			</span>
			<span className="font-bold font-text">{title}</span>
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
		return <SkillCard item={item} key={index} index={index} />
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
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">{cardsList}</div>
			<div className="flex flex-col md:flex-row mt-14 gap-10">
				<div className="flex-1">
					<h2 className="title">Soft Skills</h2>
					<ul className="text card-2" data-aos="zoom-out-up">
						{skillsList(soft)}
					</ul>
				</div>
				<div className="flex-1">
					<h2 className="title">Other Skills</h2>
					<ul
						className="text card-2"
						data-aos="zoom-out-up"
						data-aos-delay="150"
					>
						{skillsList(other)}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Skills
