import { title } from "../pages/_document"
import Head from "next/head"

const Header = () => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			{/* <header className="bg-white bg-opacity-10 backdrop-blur-xl sticky top-0 w-full py-3 z-20">
				<div className="cont flex gap-5 justify-between">
					<div className="font-title text-2xl">My CV</div>
					<div>lol</div>
				</div>
			</header> */}
		</>
	)
}

export default Header
