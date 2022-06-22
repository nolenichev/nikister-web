import personalInfo from "../data/personalInfo.json"
import Languages from "./Languages"

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
		<div className="flex gap-8">
			<Languages />
			<div className="card flex-3 p-10">
				<h2 className="title">Shortly About Me</h2>
				<p className="text text-xl">
					{"//"} I am passionate about Programming and IT technologies. I am
					always happy to learn something new. <br />
					Therefore, I am working <span className="word">smart</span>, not{" "}
					<span className="word">hard</span>. As for my hobbies, I am fond of
					Game Design, NFT and travelling.
				</p>
			</div>
			<div className="card flex-2 p-10">
				<h2 className="title">What I can do</h2>
				<ul className="list-none text-xl flex flex-col gap-2">{skill}</ul>
			</div>
		</div>
	)
}

export default About
