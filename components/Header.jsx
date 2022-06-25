import Head from "next/head"
import { FaHamburger } from "react-icons/fa"

const sections = ["about", "skills", "portfolio", "contacts"]

const Header = ({ pageTitle }) => {
	const links = sections.map((item, index) => {
		return (
			<a href={`#${item}`} className="text-hover" key={index}>
				{item}()
			</a>
		)
	})

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<header className="sticky top-0 w-full py-4 bg-black z-30">
				<div className="cont flex justify-between items-center">
					<a href="#" className="select-none font-main text-xl font-semibold">
						{"<"}Nikister {"/>"}
					</a>
					<nav className="gap-5 text text-xl hidden md:flex">
						{links}
					</nav>

					<button className="text-3xl block md:hidden">
						<FaHamburger />
					</button>
				</div>
			</header>
		</>
	)
}

export default Header
