import ParticlesBg from "../components/ParticlesBg"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Head from "next/head"
import { title } from "./_document"

const App = () => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<ParticlesBg />
			<main className="cont py-10 relative z-10">
				<Hero />
				<About />
				<Skills />
			</main>
		</>
	)
}

export default App
