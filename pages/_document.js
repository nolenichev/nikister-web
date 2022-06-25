import { Html, Head, Main, NextScript } from "next/document"

export const pageTitle = "Web Developer | Nick Olenichev"
const description =
	"// Hello world! My name is Nikita Olenichev. I am a Web Developer, having more than 2 years of commercial experience and more than 30 projects in my portfolio. Ready to strart Your Project!"

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href="https://fonts.cdnfonts.com/css/fredoka-one"
					rel="stylesheet"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.cdnfonts.com/css/nitti"
					rel="stylesheet"
					crossOrigin="true"
				/>
				<meta name="title" content={pageTitle} />
				<meta name="og:title" content={pageTitle} />
				<meta name="twitter:title" content={pageTitle} />
				<meta name="description" content={description} />
				<meta name="og:description" content={description} />
				<meta name="twitter:description" content={description} />
				<meta
					name="keywords"
					content="Nikita Olenichev, Nikister, frontend developer, web developer, web developer nikister, nikita olenichev personal website, nikister web, frontend developer prague, web developer prague"
				/>
				<meta
					name="og:image"
					content="https://nikister.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.33cc3770.png&w=1080&q=75"
				/>
				<meta
					name="twitter:image"
					content="https://nikister.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.33cc3770.png&w=1080&q=75"
				/>
				<meta property="og:image:width" content="400" />
				<meta property="og:image:height" content="400" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
