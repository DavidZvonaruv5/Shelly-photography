'use client'
import Banner from "@/components/Banner"
import Welcome from "@/components/Welcome"
import ScrollingImage from "@/components/ScrollingImage"
import About from "@/components/About"
import Gallery from "@/components/Gallery"
import MainContact from "@/components/MainContact"
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <div >
      <Banner />
      <Welcome />


      <ScrollingImage image="scrolling1.jpg" />
      <About />
      <ParallaxProvider>

        <ParallaxBanner
          layers={[{ image: '/8.jpg', speed: 25 }]}
          className="aspect-[2/1] h-[550px]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl text-white font-thin text-center">Hello World!</h1>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
      <Gallery />

      <MainContact />



    </div>
  )
}
