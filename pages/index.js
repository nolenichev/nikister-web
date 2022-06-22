import ParticlesBg from "../components/ParticlesBg"
import Hero from "../components/Hero"
import Header from "../components/Header"
import About from "../components/About"
import Skills from "../components/Skills"
import Languages from "../components/Languages"

const App = () => {
	return (
		<>
			<Header />
			<ParticlesBg />
			<main className="cont py-14 relative z-10">
				<div className="flex gap-12">
					<Hero />
					{/* <Languages /> */}
				</div>
				<About />
				<Skills />
			</main>
		</>
	)
}

export default App
