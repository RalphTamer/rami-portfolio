import "@/styles/globals.css"
import "../../node_modules/swiper/swiper.scss"
import type { AppProps } from "next/app"
import { Montserrat } from "@next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"]
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  )
}
