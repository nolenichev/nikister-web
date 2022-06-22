import skillsData from "../data/skills.json"

const ProgressBar = ({ percentage = 0, title }) => {
	return (
		<div className="w-full">
			<div className="flex gap-5 justify-between mb-2">
				<h3 className="text">
					{"//"} {title}
				</h3>
				<span>{percentage}</span>
			</div>
			<div className="relative bg-black rounded-full w-full h-3 overflow-hidden">
				<div
					className="h-3 absolute top-0 left-0 bg-gradient-to-r from-green-600 to-green-900"
					style={{ width: `${percentage}%` }}
				></div>
			</div>
		</div>
	)
}

const Skills = () => {
	const skills = skillsData.map((item, index) => {
		return (
			<ProgressBar
				percentage={item.percentage}
				title={item.title}
				key={index}
			/>
		)
	})

	return (
		<div className="card p-10 w-full">
			<div className="title">Skills</div>
			<div className="grid gap-x-10 gap-y-5 grid-cols-2">{skills}</div>
		</div>
	)
}

export default Skills
