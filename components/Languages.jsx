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
		<div className="bg-white rounded-3xl bg-opacity-10 backdrop-blur-xl w-20 p-3">
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
			<div className="absolute rounded-full overflow-hidden m-6 left-0 right-0 top-0 bottom-0">
				<Image src={img} alt="Flag" />
			</div>
		</div>
	)
}

const Languages = ({}) => {
	const langs = data.map((item, index) => {
		return (
			<ProgressCircle img={flags[index]} percentage={item.level} key={index} />
		)
	})

	return (
		<div className="flex flex-col justify-between items-center gap-4 mb-8">{langs}</div>
	)
}

export default Languages
