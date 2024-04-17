import { useCallback, useEffect, useRef } from "react"
import Swiper from "swiper"
import SVGIcon from "./SvgIcon"

type Props = {
  children: JSX.Element[]
}
const SwiperWrapper = (props: Props) => {
  const swiperContainerRef = useRef<null | HTMLDivElement>(null)
  const swiperRef = useRef<null | Swiper>(null)

  const initSwiperCb = useCallback(() => {
    const swiperElem = swiperContainerRef.current!
    console.log(swiperElem)

    swiperRef.current = new Swiper(swiperElem, {
      modules: [],
      lazy: {
        loadPrevNext: true
      },
      slidesPerView: 1
    })
  }, [])

  useEffect(() => {
    initSwiperCb()
    return () => {
      swiperRef.current?.destroy(true)
    }
  }, [initSwiperCb])

  return (
    <div className="swiper" ref={swiperContainerRef}>
      <div className="swiper-wrapper">
        {/* Slides */}
        {props.children.map((child, i) => {
          return (
            <div key={i} className="swiper-slide flex justify-center">
              {child}
              <div className="swiper-lazy-preloader"></div>
            </div>
          )
        })}
      </div>
      <div
        style={{
          cursor: "pointer",
          position: "absolute",
          zIndex: 999,
          top: "50%",
          left: 0
          // transform: "translateY(-50%)",
        }}
        onClick={(e) => {
          e.preventDefault()
          swiperRef.current?.slidePrev()
        }}
      >
        <SVGIcon name="chevron-left" color="#104d6c" />
      </div>
      <div
        onClick={(e) => {
          e.preventDefault()
          swiperRef.current?.slideNext()
        }}
        className="pointer"
        style={{
          position: "absolute",
          zIndex: 999,
          top: "50%",
          right: 0
          // transform: "translateY(-50%)",
        }}
      >
        <SVGIcon name="chevron-right" color="#104d6c" size={26} />
      </div>
    </div>
  )
}

export default SwiperWrapper
