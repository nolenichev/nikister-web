import { Html, Head, Main, NextScript } from "next/document"

export const title = "Web Developer | Nick Olenichev"
const description = ""

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href="https://fonts.cdnfonts.com/css/nitti"
					rel="stylesheet"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.cdnfonts.com/css/bizmo-trial"
					rel="stylesheet"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.cdnfonts.com/css/pixel12x10"
					rel="stylesheet"
					crossOrigin="true"
				/>
				<meta name="title" content={title} />
				<meta name="og:title" content={title} />
				<meta name="twitter:title" content={title} />
				<meta name="description" content={description} />
				<meta name="og:description" content={description} />
				<meta name="twitter:description" content={description} />
				<meta name="keywords" content="" />
				<meta name="og:image" content="" />
				<meta name="twitter:image" content="" />
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
