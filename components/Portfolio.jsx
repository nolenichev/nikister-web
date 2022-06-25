import Image from "next/image"
import { useState } from "react"
import { BiLinkExternal } from "react-icons/bi"
import { projects } from "../data/Portfolio"

const Project = ({ project }) => {
	const { title, images, year, positions, link } = project
	const [image, setImage] = useState(images[0])
	const positionsList = positions.map((item, index) => {
		const point = positions.length - 1 === index ? `"` : `", `
		return (
			<span key={index}>
				{`"`}
				{item}
				{point}
			</span>
		)
	})

	return (
		<div className="bg-black rounded-3xl p-2 pb-1">
			<div className="flex justify-between px-2 mb-2">
				<div className="flex items-center gap-3">
					<div className="flex gap-1">
						<div className="bg-red-400 w-2 h-2 rounded-full"></div>
						<div className="bg-yellow-400 w-2 h-2 rounded-full"></div>
						<div className="bg-green-400 w-2 h-2 rounded-full"></div>
					</div>
					{link ? (
						<a
							href={`https://${link}`}
							rel="noreferrer"
							target="_blank"
							className="font-title text-xl flex gap-2 items-center text-hover"
						>
							{title}{" "}
							<span className="text-sm">
								<BiLinkExternal />
							</span>
						</a>
					) : (
						<h3 className="font-title text-xl">{title}</h3>
					)}
				</div>
				<h3 className="text">
					{"//"} {year}
				</h3>
			</div>
			<Image
				src={image}
				alt={title}
				placeholder="blur"
				className="relative rounded-lg"
				onMouseEnter={() => {
					setImage(images[1])
				}}
				onMouseLeave={() => {
					setImage(images[0])
				}}
			/>
			<div className="text mt-1 text-center">
				{"["}
				{positionsList}
				{"]"}
			</div>
		</div>
	)
}

const Portfolio = ({}) => {
	const projectsGrid = projects.map((project, index) => {
		return <Project project={project} key={index} />
	})

	return (
		<section className="card scroll-m p-5 md:p-10" id="portfolio">
			<h2 className="title">My best projects</h2>
			<div className="grid grid-cols-2 gap-10 mt-10">{projectsGrid}</div>
		</section>
	)
}

export default Portfolio
