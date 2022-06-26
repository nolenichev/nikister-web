import Head from "next/head"
import { useState } from "react"
import { HiMenuAlt4 } from "react-icons/hi"
import Social from "./Social"

const sections = ["about", "skills", "portfolio"]

const Header = ({ pageTitle }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const links = sections.map((item, index) => {
		return (
			<a href={`#${item}`} className="text-hover" key={index}
				onClick={() => {
					setIsMenuOpen(false)
				}}
			>
				{item}({item === "about" && `contacts`})
			</a>
		)
	})

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<header className="sticky top-0 w-full py-4 bg-black z-40">
				<div className="cont flex justify-between items-center">
					<a href="#" className="select-none font-main text-xl font-semibold">
						{"<"}Nikister {"/>"}
					</a>
					<nav className="gap-5 text text-xl hidden md:flex">{links}</nav>

					<button
						className="text-3xl block md:hidden"
						onClick={() => {
							setIsMenuOpen(!isMenuOpen)
						}}
					>
						<HiMenuAlt4 />
					</button>
				</div>
			</header>

			{isMenuOpen && (
				<div className="fixed top-0 left-0 right-0 z-30 bg-black flex gap-7 justify-center flex-col pt-32 pb-12 items-center text-2xl text">
					{links}
					<div className="mt-10">
						<Social />
					</div>
				</div>
			)}
		</>
	)
}

export default Header
