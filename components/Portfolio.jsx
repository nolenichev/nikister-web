import { projects } from "../data/portfolio.js"
import Project from "./Project"

const Portfolio = ({}) => {
	const projectsGrid = projects.map((project, index) => {
		return <Project project={project} key={index} />
	})

	return (
		<section className="card scroll-m p-5 md:p-10" id="portfolio">
			<h2 className="title">My fave projects</h2>
			<div className="grid md:grid-cols-2 gap-10 mt-5">{projectsGrid}</div>
		</section>
	)
}

export default Portfolio
