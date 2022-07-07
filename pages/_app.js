import "../styles/globals.css"
import Script from "next/script"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			easing: "ease-out-cubic",
			once: true,
			offset: 50,
		})
	}, [])

	return (
		<>
			<Script type="text/javascript" id="metric">
				{`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
					m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
					(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

					ym(89293664, "init", {
								clickmap:true,
								trackLinks:true,
								accurateTrackBounce:true,
								webvisor:true
					});`}
			</Script>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
