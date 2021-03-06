import { ImLinkedin2 } from "react-icons/im"
import { MdMail } from "react-icons/md"
import { FaGithub, FaTelegramPlane } from "react-icons/fa"
import socialLinks from "../data/basicinfo.json"

const icons = [FaTelegramPlane, FaGithub, ImLinkedin2, MdMail]

const SocialLink = ({ children, link }) => {
	return (
		<a
			href={link}
			rel="noreferrer"
			target="_blank"
			className="w-10 h-10 bg-color rounded-full flex items-center justify-center hover:text-white relative text-black text-2xl"
		>
			{children}
		</a>
	)
}

function Social({}) {
	const links = socialLinks
		.filter((item) => item.link)
		.map((item, index) => {
			return (
				<SocialLink link={item.link} key={index}>
					{icons[index]()}
				</SocialLink>
			)
		})

	return (
		<div className="flex gap-5">
			{links}
		</div>
	)
}

export default Social
