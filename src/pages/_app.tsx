import "../styles/globals.css"
import "../../node_modules/swiper/swiper.scss"
import type { AppProps } from "next/app"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}
