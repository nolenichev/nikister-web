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
		<div className="relative bg-black rounded-3xl bg-opacity-10 backdrop-blur-xl w-full p-1 md:p-5 xl:p-6">
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
			<div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
				<div className="w-1/3 h-1/3">
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
		<>
			<h2 className="title">Languages level</h2>
			<div className={`flex flex-${flex} justify-between items-center gap-5 md:gap-10`}>{langs}</div>
		</>
	)
}

export default Languages
