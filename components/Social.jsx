import { ImLinkedin2 } from "react-icons/im"
import { MdMail } from "react-icons/md"
import { FaGithub, FaTelegramPlane } from "react-icons/fa"
import socialLinks from "../data/socialLinks.json"

const icons = [MdMail, FaTelegramPlane, FaGithub, ImLinkedin2]

const SocialLink = ({ children, link }) => {
	return (
		<a
			href={link}
			rel="noreferrer"
			target="_blank"
			className="w-12 h-12 bg-color rounded-full flex items-center justify-center hover:text-white relative text-black text-2xl"
		>
			{children}
		</a>
	)
}

export function Social({}) {
	const links = socialLinks.map((item, index) => {
		return (
			<SocialLink link={item.link} key={index}>
				{icons[index]()}
			</SocialLink>
		)
	})

	return <div className="flex gap-5 mt-5">{links}</div>
}
