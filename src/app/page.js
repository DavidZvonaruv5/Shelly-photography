'use client'
import Banner from "@/components/Banner"
import Welcome from "@/components/Welcome"
import ScrollingImage from "@/components/ScrollingImage"
import About from "@/components/About"
import Gallery from "@/components/Gallery"


import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
export default function Home() {
  return (
    <div >
      <Banner />
      <Welcome />

      {/* <ParallaxProvider>

        <ParallaxBanner
          layers={[{ image: '/scrolling1.jpg', speed: 50 }]}
          className="aspect-[2/1]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl text-white font-thin">Hello World!</h1>
          </div>
        </ParallaxBanner>
      </ParallaxProvider> */}
      <ScrollingImage image="scrolling1.jpg" />
      <About />

      <Gallery />

    </div>
  )
}
