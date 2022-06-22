import Image from "next/image"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import data from "../data/languages.json"
import ru from "../img/flags/ru.svg"
import us from "../img/flags/us.svg"
import sp from "../img/flags/sp.svg"
import cz from "../img/flags/cz.svg"

const flags = [us, ru, cz, sp]

const ProgressCircle = ({ percentage = 0, title, img }) => {
	return (
		<div className="bg-black rounded-3xl bg-opacity-10 backdrop-blur-xl w-full p-5 xl:p-6">
			<CircularProgressbar
				value={percentage}
				text={title}
				styles={buildStyles({
					pathColor: `#166534`,
					textColor: "#166534",
					trailColor: "#000",
					fontSize: "2em",
				})}
			/>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
				<div className="w-2/3">
					<Image src={img} alt="Flag" className="relative w-full rounded-full" />
				</div>
			</div>
		</div>
	)
}

const Languages = ({flex = "row"}) => {
	const langs = data.map((item, index) => {
		return (
			<ProgressCircle img={flags[index]} percentage={item.level} key={index} />
		)
	})

	return (
		<div className={`flex flex-${flex} justify-between items-center gap-10`}>{langs}</div>
	)
}

export default Languages
