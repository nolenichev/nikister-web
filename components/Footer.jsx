import Image from "next/image"
import Social from "./Social"
import psss from "../img/psss.png"

const Footer = ({}) => {
	return (
		<footer className="card relative px-5 flex items-center justify-between flex-col-reverse md:flex-row gap-3 pt-5 md:pt-0">
			<div className="flex items-center gap-5">
				<div className="w-20 h-20">
					<Image
						src={psss}
						alt="psss"
						placeholder="blur"
						className="relative"
					/>
				</div>
				<h3 className="text-lg md:text-xl font-title">Nick Olenichev | 2022</h3>
			</div>
			<Social />
		</footer>
	)
}

export default Footer
