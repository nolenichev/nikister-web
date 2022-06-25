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
			className="w-9 h-9 bg-color rounded-full flex items-center justify-center hover:text-white relative text-black text-xl"
		>
			{children}
		</a>
	)
}

function Social({}) {
	const links = socialLinks.map((item, index) => {
		return (
			<SocialLink link={item.link} key={index}>
				{icons[index]()}
			</SocialLink>
		)
	})

	return <div className="flex gap-5 reltaive md:absolute top-5 mb-2 md:right-5">{links}</div>
}

export default Social
