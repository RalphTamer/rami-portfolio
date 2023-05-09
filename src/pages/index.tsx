import localFont from "next/font/local"
import { CSSProperties } from "react"

import "swiper/css"
import SwiperWrapper from "@/components/SwiperWrapper"
import { useRouter } from "next/router"

export default function Home() {
  const darkBlueColor = "#104d6c"
  const socialsStyle: CSSProperties = {
    textAlign: "center",
    color: darkBlueColor,
    fontWeight: "600"
  }
  const socialsClassName =
    "flex flex-col items-center max-md:text-[8px] text-[22px]"
  const myWorkImages: string[] = []
  for (let i = 0; i <= 17; i++) {
    if (i === 0) {
      continue
    }
    let number
    if (i < 10) {
      number = `0${i}`
    } else {
      number = i
    }
    const imageName = `My-Work-Website-Layout-${number}.png`
    myWorkImages.push(imageName)
  }
  const router = useRouter()
  return (
    <div>
      <div className="relative">
        <img
          src={`/images/BKG.png`}
          style={{
            objectFit: "contain"
          }}
        />
        <div className="absolute" style={{ top: 0 }}>
          <div className="" style={{ width: "100vw" }}>
            <div className="flex justify-center pt-4">
              <img
                className="max-md:w-[60px] md:w-[200px]"
                src="/images/TopLogo.png"
                style={{ objectFit: "contain" }}
              />
            </div>
            <img
              className="pt-8"
              src="/images/Header.png"
              style={{ objectFit: "contain", width: "75vw" }}
            />
            <div className="flex justify-center">
              <img
                className="pt-8"
                src="/images/AboutMe.png"
                style={{ objectFit: "contain", width: "80vw" }}
              />
            </div>
            <div className="">
              <img
                className="pt-2"
                src="/images/WhatYK.png"
                style={{ objectFit: "contain", width: "30vw" }}
              />
            </div>
            <div className="flex justify-center mt-[-2%]">
              <img
                className=""
                src="/images/Iceberg.png"
                style={{ objectFit: "contain", width: "70vw" }}
              />
            </div>
            <div className="flex justify-end mt-[-20%]">
              <img
                className=""
                src="/images/WhatYDK.png"
                style={{ objectFit: "contain", width: "30vw" }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className=""
            src="/images/MyWork.png"
            style={{ objectFit: "contain", width: "80vw" }}
          />
        </div>
        <div className="flex mt-[-2%] justify-center">
          <img
            className=""
            src="/images/Diamonds.png"
            style={{
              objectFit: "contain",
              width: "70vw"
            }}
          />
        </div>
        {/* line */}
        <div className="flex justify-center pt-2">
          <div
            style={{
              width: "80vw",
              height: "1px",
              backgroundColor: "rgb(119 153 171)"
            }}
          />
        </div>
        {/* swiper goes here */}
        <SwiperWrapper>
          {myWorkImages.map((image) => {
            return <img src={`/images/my-work/${image}`} />
          })}
        </SwiperWrapper>
        <div className="flex justify-center">
          <img
            className=""
            src="/images/ContactMe.png"
            style={{ objectFit: "contain", width: "80vw" }}
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-center">
            <img
              className="py-2"
              src="/images/Ready.png"
              style={{ objectFit: "contain", width: "30vw" }}
            />
          </div>
          <div className="mx-[10vw]">
            <div className="grid grid-cols-12">
              <div
                className="col-span-4 pr-3 "
                style={{ borderRight: `1px solid ${darkBlueColor}` }}
              >
                <img src="/images/Map.png" />
                <div
                  className="max-md:text-[10px] md:text-[36px] max-md:leading-[11px] md:leading-[36px] pt-1"
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: darkBlueColor
                  }}
                >
                  Beirut , Lebanon
                </div>
              </div>
              <div
                className="col-span-4 flex flex-col items-center justify-between space-y-1"
                style={{ borderRight: `1px solid ${darkBlueColor}` }}
              >
                <div className={socialsClassName}>
                  <img src="/images/insta.png" className="max-md:w-[18px]" />
                  <div style={socialsStyle}>@ramyfch</div>
                </div>

                <div className={socialsClassName}>
                  <img src="/images/Mail.png" className="max-md:w-[18px]" />
                  <div className="max-md:leading-[8px] md:leading-[22px]">
                    <div style={socialsStyle}>ramy_f_chrabieh</div>
                    <div style={socialsStyle}>@hotmail.com</div>
                  </div>
                </div>
                <div className={socialsClassName}>
                  <img src="/images/Phone.png" className="max-md:w-[18px]" />
                  <div style={socialsStyle}>+961 79 145 441</div>
                </div>
              </div>
              <div className="col-span-4 flex flex-col justify-around mx-2">
                <div
                  style={{
                    fontWeight: "600",
                    color: darkBlueColor
                  }}
                  className="max-md:text-[12px] md:text-[48px] max-md:leading-[12px] md:leading-[48px]"
                >
                  LIKE WHAT YOU SEE?
                </div>
                <div className="flex items-center">
                  <div
                    className="max-md:text-[12px] md:text-[48px] max-md:leading-[12px] md:leading-[48px]"
                    style={{
                      color: darkBlueColor
                    }}
                  >
                    Use this Glyph as a sign & email me!
                  </div>
                  <a
                    className="max-md:w-[40px] md:w-[250px]"
                    style={{ aspectRatio: 1 }}
                    href="mailto:rami_f_chrabieh@hotmail.com"
                  >
                    <img
                      className=" md:w-[200px]"
                      src="/images/RedirectSquare.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="py-2"
              src="/images/WhenYouAre.png"
              style={{ objectFit: "contain", width: "40vw" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
