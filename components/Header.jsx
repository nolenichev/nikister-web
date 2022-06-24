import Head from "next/head"
import { FaHamburger } from "react-icons/fa"

const Header = ({ pageTitle }) => {
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
					<nav className="gap-7 font-bold text text-xl hidden md:flex">
						<a href="#about" className="text-hover">
							about()
						</a>
						<a href="#skills" className="text-hover">
							skills()
						</a>
						<a href="#portfolio" className="text-hover">
							portfolio()
						</a>
						<a href="#contacts" className="text-hover">
							contacts()
						</a>
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
