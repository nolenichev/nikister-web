import az1 from "../img/portfolio/az1.png"
import az2 from "../img/portfolio/az2.png"
import mr1 from "../img/portfolio/mr1.png"
import mr2 from "../img/portfolio/mr2.png"
import spc1 from "../img/portfolio/spc1.png"
import spc2 from "../img/portfolio/spc2.png"
import str1 from "../img/portfolio/str1.png"
import str2 from "../img/portfolio/str2.png"

export const projects = [
	{
		title: "SpacePunks",
		year: "2021",
		link: "spacepunks.club",
		positions: ["UI/UX", "Frontend"],
		images: [spc1, spc2],
	},
	{
		title: "Azura",
		year: "2022",
		link: "azura.club",
		positions: ["Frontend"],
		images: [az1, az2],
	},
	{
		title: "Metarankings",
		year: "2021",
		link: "metarankings.io",
		positions: ["UI/UX", "Frontend", "Backend"],
		images: [mr1, mr2],
	},
	{
		title: "Strip",
		year: "2020",
		link: "",
		positions: ["Frontend"],
		images: [str1, str2],
	}
]
