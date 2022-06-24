import ParticlesBg from "../components/ParticlesBg"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import { pageTitle } from "./_document"
import Header from "../components/Header"

const App = () => {
	return (
		<>
			<ParticlesBg />
			<Header pageTitle={pageTitle}></Header>
			<main className="cont py-5 md:py-10 relative z-10">
				<Hero />
				<About />
				<Skills />
			</main>
		</>
	)
}

export default App
