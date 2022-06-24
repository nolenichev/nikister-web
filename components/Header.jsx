import Head from "next/head"
import Image from "next/image"
import logo from "../img/logo.svg"

const Header = ({ pageTitle }) => {
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<header className="sticky top-0 w-full py-4 bg-gray-400 z-30 bg-opacity-10 backdrop-blur-lg">
				<div className="cont flex justify-between items-center">
					<a href="#" className="flex gap-5 items-center select-none">
						<div className="w-10 h-10">
							<Image src={logo} alt="Logo" className="relative rounded-xl" />
						</div>
						<h3 className="font-title text-xl uppercase -mb-1">Nikister</h3>
					</a>
					<nav className="flex gap-7 font-bold text text-xl">
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
				</div>
			</header>
		</>
	)
}

export default Header
