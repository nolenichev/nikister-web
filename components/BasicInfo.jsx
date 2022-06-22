import Image from "next/image"
import { BsArrowRightCircleFill, BsFillPersonFill } from "react-icons/bs"
import { ImLinkedin2 } from "react-icons/im"
import { MdMail, MdLocationPin } from "react-icons/md"
import { FaGithub, FaTelegramPlane } from "react-icons/fa"
import basicInfo from "../data/basicinfo.json"
import tgQr from "../img/qr-tg.jpg"

const icons = [
	BsFillPersonFill,
	MdLocationPin,
	FaTelegramPlane,
	FaGithub,
	ImLinkedin2,
	MdMail,
]

const Row = ({ item, index }) => {
	return (
		<>
			<div className="text-color text-3xl">{icons[index]()}</div>
			<div>
				<h4 className="text-md text-color">{item.title}</h4>
				<h5 className="font-bold text-lg text-gray-300">{item.value}</h5>
			</div>
		</>
	)
}

const BasicInfo = ({}) => {
	const basicInformation = basicInfo.map((item, index) => {
		return (
			<>
				{item.link ? (
					<a
						key={index}
						href={item.link}
						rel="noreferrer"
						target="_blank"
						className="flex items-center gap-4 px-3 py-1 rounded-2xl transition hover:bg-black hover:bg-opacity-20 relative"
					>
						<Row item={item} index={index} />
						<div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-color">
							<BsArrowRightCircleFill />
						</div>
					</a>
				) : (
					<div key={index} className="flex items-center gap-4 px-2 py-1">
						<Row item={item} index={index} />
					</div>
				)}
			</>
		)
	})

	return (
		<div className="card flex-1 p-10 justify-between flex flex-col">
			<div>
				<h2 className="title whitespace-nowrap">Basic Information</h2>
				<div className="flex flex-col gap-4">{basicInformation}</div>
			</div>
			<div className="bg-black bg-opacity-10 p-6 mt-10 rounded-3xl backdrop-blur-xl">
				<Image
					src={tgQr}
					alt="QR"
					placeholder="blur"
					className="relative w-full rounded-3xl"
				/>
				<div className="font-main text-center mt-3 text-gray-300">
					{"//"} QR to my Telegram
				</div>
			</div>
		</div>
	)
}

export default BasicInfo
