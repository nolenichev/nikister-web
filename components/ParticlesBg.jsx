import Particles from "react-tsparticles"

const ParticlesBg = () => {
	return (
		<Particles
			params={{
				fpsLimit: 25,
				particles: {
					number: {
						value: 70,
						density: {
							enable: true,
							value_area: 800,
						},
					},
					color: {
						value: "#166534",
					},
					opacity: {
						value: 0.5,
						random: false,
						anim: {
							enable: false,
							speed: 1,
							opacity_min: 0.1,
							sync: false,
						},
					},
					size: {
						value: 3,
						random: true,
						anim: {
							enable: false,
							speed: 40,
							size_min: 0.1,
							sync: false,
						},
					},
					line_linked: {
						enable: true,
						distance: 150,
						color: "#4cbb17",
						opacity: 0.8,
						width: 1.3,
					},
					move: {
						enable: true,
						speed: 2,
						random: false,
						straight: false,
						bounce: false,
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200,
						},
					},
				},
				interactivity: {
					events: {
						resize: true,
					},
					modes: {
						remove: {
							particles_nb: 2,
						},
					},
				},
				retina_detect: true,
			}}
		/>
	)
}

export default ParticlesBg
